# Generated by Django 2.2.1 on 2019-05-29 06:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('streamflix', '0019_delete_person'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='usuario',
            options={'ordering': ['-id'], 'permissions': (('nivel_admin', 'Nivel de administrador'),)},
        ),
    ]
