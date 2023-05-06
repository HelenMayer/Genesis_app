from django.http import HttpResponse
from django.shortcuts import render


def account(request):
    return render(request, 'user_account/user_account_index.html', {'status': 'Выйти'})


def sendingdata(request):
    if request.is_ajax():
        result = request.GET.get('result', None)
        print(result)
    return HttpResponse("OK")
