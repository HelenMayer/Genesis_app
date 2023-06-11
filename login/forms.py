from .models import NewUser
from django.forms import ModelForm, TextInput


class NewUserForm(ModelForm):
    class Meta:
        model = NewUser
        fields = ['first_name', 'last_name', 'otchestvo', 'teams_name', 'email', 'phone_number']

        widgets = {
            'first_name': TextInput(attrs={
                'class': 'form-control col-sm-6',
                'placeholder': 'Имя'
            }),
            'last_name': TextInput(attrs={
                'class': 'form-control col-sm-6',
                'placeholder': 'Фамилия'
            }),
            'otchestvo': TextInput(attrs={
                'class': 'form-control col-sm-6',
                'placeholder': 'Отчество'
            }),
            'teams_name': TextInput(attrs={
                'class': 'form-control col-sm-6',
                'placeholder': 'Название команды'
            }),
            'email': TextInput(attrs={
                'type': 'email',
                'class': 'form-control col-sm-6',
                'placeholder': 'Электронная почта'
            }),
            'phone_number': TextInput(attrs={
                'type': 'tel',
                'class': 'form-control col-sm-6',
                'placeholder': 'Номер телефона'
            })
        }


class LoginForm(ModelForm):
    class Meta:
        model = NewUser
        fields = ['login', 'password']

        widgets = {
            'login': TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Логин',
                'type': 'login',
                'id': 'exampleInputEmail1'
            }),
            'password': TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Пароль',
                'type': 'password',
            })
        }


class ResetPasswordForm(ModelForm):
    class Meta:
        model = NewUser
        fields = ['email']

        widgets = {
            'email': TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Введите email',
                'type': 'email',
                'id': 'exampleInputEmail1'
            })
        }
