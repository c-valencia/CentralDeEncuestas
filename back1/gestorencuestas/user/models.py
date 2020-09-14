from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    num_documento = models.CharField(max_length=20)
    tipo_documento = models.CharField(max_length=2)
    celular = models.CharField(max_length=15)
    email = models.CharField(max_length=100)
