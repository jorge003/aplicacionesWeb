"""sitio URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.contrib.auth.views import LoginView, LogoutView
from django.urls import path, re_path
from streamflix import views
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name="logout"),
    #path('', views.login, name="login"),
    path('enter/', views.enter_view, name="enter"),
    path('busqueda/', views.busqueda, name="busqueda"),
    path('video/<int:id>', views.video, name="video"),
    path('admin_content/', views.admin_content, name="admin_content"),
    path('admin_usuarios/', views.usuarios, name="admin_usuarios"),
    path('add_usuario/', views.add_usuario, name="add_usuario"),
    path('delete/<int:pk>', views.UserDelete.as_view(), name="user_delete"),
    path('update_usuario/<int:id>', views.update_usuario, name="update_usuario"),
    path('admin_movies/', views.movies, name="admin_movies"),
    path('resultados/', views.resultados, name="resultados"),
    path('search_movie/', views.search_movie, name="search_movie"),
    path('delete_movie/<int:pk>', views.MovieDelete.as_view(), name="movie_delete"),
    path('update_movie/<int:id>', views.update_movie, name="update_movie"),
]

if settings.DEBUG:
    from django.conf.urls.static import static
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)