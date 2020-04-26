from django.contrib import admin
from app.models import Product, Category, Review

admin.site.register(Product)
admin.site.register(Category)
@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('id', 'text', 'user', 'product',)
