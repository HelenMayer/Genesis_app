from django.http import HttpResponse
from django.shortcuts import render


def account(request):
    return render(request, 'user_account/user_account_index.html', {'status': 'Выйти'})


def sendingdata(request):
    if request.method == "POST":
        result_time = request.POST.get("result_time")
        current_day = request.POST.get("current_day")
        current_month = request.POST.get("current_month")
        print(result_time)
    return HttpResponse("OK")
