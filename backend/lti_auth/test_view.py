from django.shortcuts import render, redirect, HttpResponse

from rich import print



def test_launch(request):
    return render(request, 'index.html')

