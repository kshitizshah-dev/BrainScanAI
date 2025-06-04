from django.urls import path
from .views import api_post
urlpatterns = [
    path('brain_tumor_api/',api_post.as_view()),
]