from django.urls import path
from .views import Create_user
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView
urlpatterns = [
    path('signup/',Create_user.as_view()),
    path('token/',TokenObtainPairView.as_view()),
    path('refresh/',TokenRefreshView.as_view())
]