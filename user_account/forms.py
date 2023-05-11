from .models import Booking
from django.forms import ModelForm, TextInput


class NewBooking(ModelForm):
    class Meta:
        model = Booking
        Firld = ['time_booking']