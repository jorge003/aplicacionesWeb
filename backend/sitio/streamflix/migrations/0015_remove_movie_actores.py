# Generated by Django 2.2.1 on 2019-05-24 16:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('streamflix', '0014_person'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='movie',
            name='actores',
        ),
    ]
