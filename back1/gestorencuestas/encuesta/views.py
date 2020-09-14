from django.shortcuts import render
from .models import Contacto, Encuesta
from rest_framework import generics
from .serializers import ContactoSerializer, EncuestaSerializer
from correspondencia.email import Email
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.
class ContactoList(generics.ListCreateAPIView):
    serializer_class = ContactoSerializer
    queryset = Contacto.objects.all()
    

class ContactoDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ContactoSerializer
    queryset = Contacto.objects.all()

"""class CampaniaList(generics.ListCreateAPIView):
    serializer_class = CampaniaSerializer
    queryset = Campania.objects.all()

class CampaniaDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CampaniaSerializer
    queryset = Campania.objects.all()"""

class EncuestaList(generics.ListCreateAPIView):
    print("entre en list")
    serializer_class = EncuestaSerializer
    queryset = Encuesta.objects.all()
   

class EncuestaDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = EncuestaSerializer
    queryset = Encuesta.objects.all()
    
class Envio:

    @api_view(['POST'])
    def envio_email(request):
        email = Email()
        email.enviar_email(request.data['mail'], request.data['enlace'])
        print(request.data['mail'])
        return Response({"message": "El correo fue enviado con éxito"})