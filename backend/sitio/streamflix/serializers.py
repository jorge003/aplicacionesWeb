from rest_framework import serializers
from streamflix.models import *

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ('Title', 'Year', 'Director', 'Plot', 'Metascore', 'url_contenido')