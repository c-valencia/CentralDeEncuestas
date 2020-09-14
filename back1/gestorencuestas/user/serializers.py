from rest_framework import serializers
from .models import User
from django.contrib.auth.models import Group
class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        exclude = ('is_superuser','is_staff' )
        extra_kwargs = {
            'password': {'write_only': True},
            'username': {'write_only': True},
        }

    def create(self, validated_data, instance=None):
        user = User(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        kwargs = {
            'id':1
        }
        group = Group.objects.get(**kwargs)
        group.user_set.add(user)
        return user