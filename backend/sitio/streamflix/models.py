from django.db import models
from django import forms

# Create your models here.
class Usuarios(models.Model):
    nombre_usuario = models.CharField(max_length=30, unique=True)
    email = models.EmailField(unique=True)
    password = forms.CharField(max_length=32, widget=forms.PasswordInput)
    ADMIN = 'A'
    USER = 'U'
    TIPO_USUARIO_CHOICES = (
        (ADMIN, 'Administrador'),
        (USER, 'Usuario'),
    )
    tipo_usuario = models.CharField(
        max_length=1,
        choices=TIPO_USUARIO_CHOICES,
        default=USER,
    )

class Actores(models.Model):
    nombre_actor = models.CharField(max_length=50)

class Movies(models.Model):
    movie = models.CharField(max_length=50)
    url_contenido = models.URLField()
    descripcion = models.TextField()
    year = models.CharField(max_length=4)
    url_portada = models.URLField()
    score = models.CharField(max_length=1)
    actores = models.ManyToManyField(Actores)