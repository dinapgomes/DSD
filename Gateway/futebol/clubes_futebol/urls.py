from django.urls import path
from .views import clube


urlpatterns = [
    path('clube/', clube, name="clubes")
]