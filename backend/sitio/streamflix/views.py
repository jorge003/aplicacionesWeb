from django.shortcuts import render, HttpResponse, redirect
from streamflix.models import *
from streamflix.serializers import *
from django.contrib.auth.models import User
from django.contrib.auth.views import LoginView, LogoutView
from django.views.generic.edit import DeleteView
from django.urls import reverse_lazy
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.request import Request
from rest_framework.response import Response
from django.contrib.auth.models import Permission
from django.contrib.auth.decorators import login_required
from django.conf import settings
import urllib.request, urllib.parse, urllib.error
import json, requests

omdbapi = 'eeb776ff'
serviceurl = 'http://www.omdbapi.com/?'
apikey = '&apikey='+omdbapi

# Create your views here.

def enter_view(request):
    if request.user.has_perm('streamflix.nivel_admin'):
        return redirect('admin_content')
    else:
        return redirect('busqueda')

@login_required(login_url='/')
def busqueda(request):
    base_movies = Movie.objects.all()
    return render(request, "streamflix/Busqueda.html", {'base_movies':base_movies})

@login_required(login_url='/')
def resultados(request):
    if request.method == 'POST':
        result = request.POST['search']
        print(result)
        try:
            movies_by_title = Movie.objects.filter(Title__contains=result)
            movies_by_year = Movie.objects.filter(Year__contains=result)
            movies_by_director = Movie.objects.filter(Director__contains=result)
            #print(movies_by_title)
            #print(movies_by_year)
            #print(movies_by_director)
            return render(request, "streamflix/resultados.html", {'result': result, 'movies_by_title': movies_by_title, 'movies_by_year': movies_by_year, 'movies_by_director': movies_by_director})
        except Movie.DoesNotExist:
            movies_by_title = None
            movies_by_year = None
            movies_by_director = None

    return redirect('busqueda')
    
@login_required(login_url='/')
def video(request, id):
    movie = Movie.objects.get(id=id)
    actores = movie.Actors.all()
    return render(request, "streamflix/video.html", {'movie':movie, 'actores':actores})

@login_required(login_url='/')
def admin_content(request):
    if request.user.has_perm('streamflix.nivel_admin'):
        return render(request, "streamflix/admin_content.html")
    else:
        return redirect('busqueda')

@login_required(login_url='/')
def movies(request):
    if request.user.has_perm('streamflix.nivel_admin'):
        base_movies = Movie.objects.all()
        return render(request, "streamflix/CRUD_peliculas.html", {'base_movies':base_movies})
    else:
        return redirect('busqueda')

def save_poster(movie_data):
    import os
    title = movie_data['Title']
    print(title)
    title = title.replace(':','_')
    poster_url = movie_data['Poster']
    poster_url = poster_url.replace('SX300','SY268')
    
    poster_file_extension=poster_url.split('.')[-1]
    poster_data = urllib.request.urlopen(poster_url).read()
    savelocation=os.path.join(settings.BASE_DIR, "media")
    
    filename=savelocation+'\\'+str(title)+'.'+poster_file_extension
    print(filename)
    f=open(filename,'wb')
    f.write(poster_data)
    f.close()
    print(title)

    return str(title)+'.'+poster_file_extension


@api_view(['POST'])
def search_movie(request):
    if request.method == 'POST':
        titulo = request.POST['titulo']
        url_preprocesada = request.POST['url_video']
        url_contenido = url_preprocesada.replace("watch?v=","embed/")
        
        url = serviceurl + urllib.parse.urlencode({'t': titulo})+apikey
        
        response = requests.get(url)
        movie_data = response.json()

        if response.status_code == 200:
            movie_data.update({'url_contenido':url_contenido})
            poster = save_poster(movie_data)
            #print(movie_data)
            movie_data_obj = MovieSerializer(data=movie_data)
            #print(movie_data_obj.is_valid())
            #print(movie_data_obj.errors)
            if movie_data_obj.is_valid():
                movie = movie_data_obj.save()
                movie.Poster = poster
                #movie.Poster = movie.Poster.replace('SX300','SY268')
                #print(movie.Poster)
                movie.save()
            
            if movie_data['Actors']!='N/A':
                for actor in movie_data['Actors'].split(','):
                    actor = actor.strip()
                    this_actor = Actor(nombre_actor=actor)
                    this_actor.save()
                    movie.Actors.add(this_actor)
            
            return redirect("admin_movies")
        
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

class MovieDelete(DeleteView):
    model = Movie
    success_url = reverse_lazy("admin_movies")

def update_movie(request, id):
    pelicula = Movie.objects.get(id=id)
    print(id)
    if request.method == 'POST':
        pelicula.movie = request.POST['newMovie']
        url_preprocesada = request.POST['newURL']
        pelicula.url_contenido = url_preprocesada.replace("watch?v=","embed/")
        pelicula.save() 

    return redirect("admin_movies")

@login_required(login_url='/')
def usuarios(request):
    if request.user.has_perm('streamflix.nivel_admin'):
        base_usuarios = User.objects.all()
        return render(request, "streamflix/CRUD_usuarios.html", {'base_usuarios':base_usuarios})
    else:
        return redirect('busqueda')

def add_usuario(request):
    if request.method == 'POST':
        username = request.POST['userName']
        email = request.POST['email']
        password = request.POST['password']
        tipo_usuario = request.POST['tipo_usuario']
        user = User.objects.create_user(username, email, password)
        user.usuario.tipo_usuario = tipo_usuario
        #print(tipo_usuario)
        if tipo_usuario == 'Admin.':
            adm = Permission.objects.get(codename='nivel_admin')
            user.user_permissions.add(adm)
        user.save()
    
    return redirect("admin_usuarios")

class UserDelete(DeleteView):
    model = User
    success_url = reverse_lazy("admin_usuarios")

def update_usuario(request, id):
    usuario = User.objects.get(id=id)
    print(id)
    if request.method == 'POST':
        usuario.username = request.POST['newUser']
        usuario.email = request.POST['newEmail']
        newPass = request.POST['newPsw']
        usuario.set_password(newPass)
        usuario.usuario.tipo_usuario = request.POST['nuevo_tipo_usuario']
        if usuario.usuario.tipo_usuario == 'Admin.':
            adm = Permission.objects.get(codename='nivel_admin')
            usuario.user_permissions.add(adm)
        usuario.save()

    return redirect("admin_usuarios")