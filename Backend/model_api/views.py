from django.shortcuts import render
from rest_framework import status
from django.core.files.base import ContentFile
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.views import APIView
# from rest_framework.permissions import IsAuthenticated
from .serializer import Api_serializer, UserHistorySerializers,GetUserHistorySerializers
from django.http import HttpResponse
from .models import UserHistory
from PIL import Image
import tensorflow as tf
from io import BytesIO
import numpy as np
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
# Load model once
tf_model = tf.keras.models.load_model('model_api/pretrained_model/Brain_tumor_updated.h5')
@method_decorator(csrf_exempt, name='dispatch')
class api_post(APIView):
    parser_classes = [MultiPartParser, FormParser]  # Accept file uploads

    def post(self, request):
        serialize = Api_serializer(data=request.data) #serializer
        print(request.user.id)

        if serialize.is_valid():
            # Access file directly from request.FILES
            image_file = request.FILES.get('image')
            if not image_file:
                return Response({"error": "No image uploaded"}, status=status.HTTP_400_BAD_REQUEST)

            # Process image
            image = Image.open(image_file).resize((256, 256))
            if image.mode != 'RGB':
                image = image.convert('RGB')
            image = np.array(image) / 255.0
            image = image.reshape(1, 256, 256, 3)

            # Predict
            prediction = tf_model.predict(image)[0]
            prediction_mask = (prediction > 0.7).astype(np.uint8) * 255
            img_cvt = Image.fromarray(prediction_mask.squeeze().astype(np.uint8))

            # Convert to binary for response
            buffer = BytesIO()
            img_cvt.save(buffer, format='PNG')
            buffer.seek(0)
            if request.user.is_authenticated:
                image_file.seek(0)
                original_image_content = ContentFile(image_file.read(), name=image_file.name)
                predicted_file = ContentFile(buffer.getvalue(),f'{request.user}_predicted_image.png')
                history_serialize = UserHistorySerializers(data={
                        'originalImage':original_image_content,
                        'predictedImage':predicted_file}
                    )
                if history_serialize.is_valid():
                    history_serialize.save(user=request.user)
                    print('user image has been saved')
                else:
                    print(history_serialize.errors)
                    return Response(history_serialize.errors,status=status.HTTP_400_BAD_REQUEST)
                
            return HttpResponse(buffer.getvalue(), content_type='image/png')

        return Response(serialize.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self,request):
        lastfive = UserHistory.objects.filter(user_id=request.user.id).order_by('-uploadDate')[:5]
        serialize = GetUserHistorySerializers(lastfive,many=True,context={'request':request})
        print(serialize.data)
        print(request.user.id)
        return Response(serialize.data)
