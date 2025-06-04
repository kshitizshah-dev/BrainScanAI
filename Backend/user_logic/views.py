from django.shortcuts import render
from .serializer import UserSerializers
# from rest_framework_simplejwt import
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework import status
# Create your views here.


class Create_user(APIView):

    def post(self, request):
        serialize = UserSerializers(data = request.data) #serilizing

        if serialize.is_valid():
            serialize.save() #saving the info in our model
            return Response({
                'message':"User has been created"
            }, status=status.HTTP_201_CREATED)
        else:
            return Response({
                'error': serialize.errors
            },status=status.HTTP_400_BAD_REQUEST)