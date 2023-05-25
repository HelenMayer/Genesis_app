from django.shortcuts import render


def account(request):
    return render(request, 'user_account/user_account_index.html')
