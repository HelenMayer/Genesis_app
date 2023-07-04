from django.urls import path
from . import views

urlpatterns = [
    path('', views.public_offer, name='public_offer')
]