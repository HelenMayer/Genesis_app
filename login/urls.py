from django.urls import path
from . import views

urlpatterns = [
    path('', views.login, name='login'),
    path('form', views.form, name='form'),
    path('reset_password', views.resetpassword, name='reset_password')
]
