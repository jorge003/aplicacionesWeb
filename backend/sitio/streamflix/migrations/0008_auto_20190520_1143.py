# Generated by Django 2.2.1 on 2019-05-20 09:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('streamflix', '0007_auto_20190520_1128'),
    ]

    operations = [
        migrations.RenameField(
            model_name='usuario',
            old_name='nombre_usuario',
            new_name='username',
        ),
    ]
