from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.
class Usuario(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    #username = models.CharField(max_length=30, unique=True)
    #email = models.EmailField(unique=True)
    #password = models.CharField(max_length=32, default=1234)
    tipo_usuario = models.CharField(max_length=7)

    class Meta:
        ordering = ['-id']
        permissions = (
            ('nivel_admin', 'Nivel de administrador'),
        )

    def __str__(self):
        return self.user.username

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Usuario.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.usuario.save()

class Actor(models.Model):
    nombre_actor = models.CharField(max_length=100)

class Movie(models.Model):
    Title = models.CharField(max_length=100, unique=True)
    Year = models.IntegerField()
    Director = models.CharField(max_length=100, null=True)
    Plot = models.TextField()
    #Poster = models.URLField()
    Poster = models.ImageField()
    Metascore = models.FloatField()
    url_contenido = models.URLField()
    Actors = models.ManyToManyField(Actor)

    class Meta:
        ordering = ['-id']