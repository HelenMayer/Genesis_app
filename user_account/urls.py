from django.urls import path, re_path
from . import views

urlpatterns = [
    path('', views.account, name='account'),
    path(r'^user_account$', views.sendingdata, name='user_account')
]
