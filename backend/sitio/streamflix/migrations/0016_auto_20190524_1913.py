# Generated by Django 2.2.1 on 2019-05-24 17:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('streamflix', '0015_remove_movie_actores'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='Poster',
            field=models.URLField(),
        ),
    ]
