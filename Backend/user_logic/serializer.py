from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializers(serializers.ModelSerializer):
    # def meta and _str_
    password2 = serializers.CharField(write_only=True)
    class Meta:
        model = User
        fields = ['username','email','password','password2']
        extra_kwargs = {'password':{'write_only': True},
                        'password2':{'write_only':True}}
    def validate(self,info):
        if info['password'] != info['password2']:
            raise serializers.ValidationError({'password':'Your two password does dont match'})
        return info
    def create(self, validated_data):
        validated_data.pop('password2')
        user = User.objects.create_user(**validated_data)
        return user
