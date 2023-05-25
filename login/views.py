from django.shortcuts import render
from .forms import NewUserForm, LoginForm
from .models import NewUser
from .models import Code
from django.http import HttpResponse
from django.contrib.auth import authenticate, login
from http import cookies


def login(request):
    error = ''
    code = Code.objects.all()
    userdata = request.COOKIES.get('login')
    if userdata is None:
        if request.method == 'POST':
            post_form = LoginForm(request.POST)
            if post_form.is_valid():
                    user = post_form.save()
                    user_login = post_form.cleaned_data.get("login")
                    password = post_form.cleaned_data.get("password")
                    login_id = NewUser.objects.filter(login=user_login)
                    password_id = NewUser.objects.filter(password=password)
                    if (login_id):
                        if (password_id):
                            if (login_id[0].teams_name == password_id[0].teams_name):
                                context = {'id': NewUser.objects.filter(login=user_login)[0].id, 'name': login_id[0].teams_name, 'code': code}
                                rendered_template = render(request, 'user_account/user_account_index.html', context)
                                response = HttpResponse(content=rendered_template)
                                response.set_cookie('login', user_login, max_age=1800)
                                return response
                        else:
                            error = 'Неверный логин или пароль'
                    else:
                        error = 'Такой пользователь не существует'
            else:
                error = 'Введены некорректные данные'

        form = LoginForm()

        data = {
            'form': form,
            'error': error,
        }

        return render(request, 'login/login_index.html', data)
    else:
        name = request.COOKIES.get('login')
        data = {
            'code': code,
            'name': name
        }
        return render(request, 'user_account/user_account_index.html', data)


def form(request):
    error = ''
    ok = 'false'
    if request.method == 'POST':
        post_form = NewUserForm(request.POST)
        if post_form.is_valid():
            ok = 'true'
            post_form.save()
        else:
            error = 'Введены некорректные данные'

    form = NewUserForm()

    data = {
        'form': form,
        'error': error,
        'ok': ok
    }

    return render(request, 'login/form_index.html', data)
