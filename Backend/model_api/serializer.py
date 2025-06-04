from rest_framework import serializers
from . models import *

class Api_serializer(serializers.ModelSerializer):
    class Meta:
        model = Patient_detail
        fields = ['image']
class UserHistorySerializers(serializers.ModelSerializer):
    class Meta:
        model = UserHistory
        fields = '__all__'
        read_only_fields=['user']
class GetUserHistorySerializers(serializers.ModelSerializer):
    class Meta:
        model = UserHistory
        fields = ['originalImage','predictedImage','uploadDate']
        read_only_fields = fields

        



