from django.shortcuts import render
from .serializers import UserSerializer
from .models import User
from .permissions import IsPostOrIsAuthenticated
from rest_framework.decorators import permission_classes
from rest_framework import generics

# Create your views here.
@permission_classes((IsPostOrIsAuthenticated, ))
class UserList(generics.ListCreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all().exclude(is_superuser=1)
class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
