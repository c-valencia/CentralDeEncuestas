# Generated by Django 2.1 on 2020-09-09 14:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('encuesta', '0005_auto_20200906_1432'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='campania',
            name='user_admin',
        ),
        migrations.RenameField(
            model_name='encuesta',
            old_name='respuesta',
            new_name='enlace',
        ),
        migrations.AlterUniqueTogether(
            name='encuesta',
            unique_together=set(),
        ),
        migrations.RemoveField(
            model_name='encuesta',
            name='fecha',
        ),
        migrations.RemoveField(
            model_name='encuesta',
            name='id_campania',
        ),
        migrations.DeleteModel(
            name='Campania',
        ),
    ]
