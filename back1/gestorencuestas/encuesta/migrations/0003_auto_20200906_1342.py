# Generated by Django 2.1 on 2020-09-06 18:42

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('encuesta', '0002_camapania'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Camapania',
            new_name='Campania',
        ),
    ]
