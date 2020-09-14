from django.db import models
from user.models import User
# Create your models here.
class Contacto(models.Model):
    num_documento = models.CharField(max_length=20, primary_key=True)
    tipo_documento = models.CharField(max_length=2)
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    celular = models.CharField(max_length=100)
    email = models.CharField(max_length=100)

    def __str__(self):
        return self.num_documento

"""class Campania(models.Model):
    id_campania = models.CharField(max_length=20, primary_key=True)
    descripcion = models.TextField(max_length=500)
    pregunta = models.TextField(max_length=500)
    fecha_inicio = models.DateField()
    fecha_fin = models.DateField()
    user_admin = models.ForeignKey(User, on_delete=models.PROTECT)

    def __str__(self):
        return self.descripcion"""

class Encuesta(models.Model):
    """class Meta:
           unique_together = (('id_contacto', 'id_campania'),)"""

    id_encuesta = models.AutoField(primary_key=True)
    id_contacto = models.ForeignKey(Contacto, on_delete=models.PROTECT)
    #id_campania = models.ForeignKey(Campania, on_delete=models.PROTECT)
    enlace = models.TextField(max_length=500)
    #fecha = models.DateField()
    observacion = models.TextField(max_length=500)
    canal = models.TextField(max_length=20)

    def __str__(self):
        return str(self.id_encuesta)