from django.shortcuts import render
from .models import New


def news(request):
    list_news = New.objects.order_by('-data_of_publish')
    return render(request, 'news/news_index.html', {'status': 'Выйти', 'list_news': list_news})

