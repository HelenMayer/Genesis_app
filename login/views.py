from django.http import HttpResponseRedirect
from django.shortcuts import render, redirect
from django.urls import reverse

from .forms import NewUserForm, LoginForm
from .models import NewUser


def login(request):
    error = ''
    if request.method == 'POST':
        post_form = LoginForm(request.POST)
        if post_form.is_valid():
                login = post_form.cleaned_data.get("login")
                password = post_form.cleaned_data.get("password")
                login_id = NewUser.objects.filter(login=login)
                password_id = NewUser.objects.filter(password=password)
                print(login_id[0].teams_name, password_id[0].teams_name)
                if (login_id[0].teams_name == password_id[0].teams_name):
                    context = {'id': NewUser.objects.filter(login=login)[0].id, 'name': login_id[0].teams_name, 'status': 'Выйти'}
                    return render(request, 'user_account/user_account_index.html', context)
                else:
                    error = 'Неверный логин или пароль'

        else:
            error = 'Введены некорректные данные'

    form = LoginForm()

    data = {
        'form': form,
        'error': error,
    }

    return render(request, 'login/login_index.html', data)


def form(request):
    error = ''
    if request.method == 'POST':
        post_form = NewUserForm(request.POST)
        if post_form.is_valid():
            post_form.save()
        else:
            error = 'Введены некорректные данные'

    form = NewUserForm()

    data = {
        'form': form,
        'error': error,
    }

    return render(request, 'login/form_index.html', data)
