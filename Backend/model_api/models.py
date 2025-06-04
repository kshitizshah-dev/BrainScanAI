from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Patient_detail(models.Model):
       name= models.CharField(max_length=60, blank=True, null=True)
       image= models.ImageField()
class UserHistory(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    originalImage =models.ImageField(upload_to='MRI_Scan/')
    predictedImage = models.ImageField(upload_to='PredictedImage/')
    uploadDate = models.DateTimeField( auto_now_add=True)

    def __str__(self):
        return self.user.username