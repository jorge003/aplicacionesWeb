from django.shortcuts import render, HttpResponse

# Create your views here.

def login(request):
    return render(request, "streamflix/login.html")

def busqueda(request):
    return render(request, "streamflix/Busqueda.html")

def video(request):
    return render(request, "streamflix/video.html")
