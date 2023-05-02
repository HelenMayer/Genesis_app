from django.shortcuts import render


def account(request, id):
    print(request)
    name = ''
    return render(request, 'user_account/user_account_index.html', {'status': 'Выйти'})

