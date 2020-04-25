from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Category(models.Model):
  name = models.CharField(max_length=200)

  def __str__(self):
    return '{}: {}'.format(self.id, self.name)

class Product(models.Model):
  name = models.CharField(max_length=200)
  price = models.FloatField()
  description = models.CharField(max_length=200)
  rating = models.FloatField()
  original_link = models.CharField(max_length=200)
  images = models.CharField(max_length=200)
  screen1 = models.CharField(max_length=200)
  screen2 = models.CharField(max_length=200)
  screen3 = models.CharField(max_length=200)
  language = models.CharField(max_length=200)
  release = models.DateField(max_length=200)
  publisher = models.CharField(max_length=200)
  developer = models.CharField(max_length=200)
  category = models.ForeignKey(Category, on_delete=models.CASCADE)
  count = models.IntegerField(default=1)

  def __str__(self):
    return '{}: {}'.format(self.id, self.name)

class ProductManager(models.Manager):
  def for_user(self, user):
      return self.filter(user=user)


class Review(models.Model):
  text = models.TextField()
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  product = models.ForeignKey(Product, on_delete=models.CASCADE,
                             related_name='reviews')

  def __str__(self):
    return '{}: {}'.format(self.user, self.cinema)
