from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.hashers import BCryptSHA256PasswordHasher


class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('username', 'password', 'first_name', 'email', 'is_staff')


class RegisterSerializer(serializers.ModelSerializer):
  password = serializers.CharField(write_only=True)
  encoder = BCryptSHA256PasswordHasher()

  class Meta:
    model = User
    fields = ('username', 'password', 'email', 'first_name')

  def create(self, validated_data):
    password = validated_data.pop('password')
    hashed_password = self.encoder.encode(
      password, salt=self.encoder.salt())
    user = User.objects.create(password=hashed_password, **validated_data)
    user.save()
    return user
