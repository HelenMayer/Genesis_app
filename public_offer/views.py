from django.shortcuts import render


def public_offer(request):
    return render(request, 'public_offer/public_offer_index.html')
