from django.contrib.auth.hashers import BCryptSHA256PasswordHasher
from rest_framework import serializers, viewsets
from django.contrib.auth.models import User
from app.models import Category, Product, Review

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


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
      model = Product
      fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
  class Meta:
    model = Category
    fields = '__all__'


class CategoryWithProducts(serializers.ModelSerializer):
  class Meta:
    model = Product
    fields = '__all__'

class ReviewSerializer(serializers.ModelSerializer):
  id = serializers.IntegerField(read_only=True)
  text = serializers.CharField(required=True)
  user = UserSerializer(read_only=True)
  cinema = ProductSerializer(read_only=True)

  class Meta:
    model = Review
    fields = '__all__'
