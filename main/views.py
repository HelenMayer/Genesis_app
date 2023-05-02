from django.shortcuts import render


def main(request):
    return render(request, 'main/main_index.html', {'status': 'Войти'})
