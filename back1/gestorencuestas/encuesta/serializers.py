from rest_framework import serializers
from .models import Contacto, Encuesta

class ContactoSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Contacto
        fields = ('num_documento','tipo_documento','nombre','apellido','celular', 'email')

"""class CampaniaSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Campania
        fields = ('id_campania','descripcion','pregunta','fecha_inicio','fecha_fin','user_admin')"""

class EncuestaSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Encuesta
        fields = ('id_encuesta','id_contacto','enlace','observacion', 'canal')