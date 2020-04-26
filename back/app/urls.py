from django.urls import path
from app import views
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('users/', views.UserList.as_view()),
    path('login/', views.login),
    path('logout/', views.logout),
    path('register/', csrf_exempt(views.Register.as_view())),
    path('categories/', views.category_list),
    path('categories/<int:id>/', views.category_detail),
    path('categories/<int:id>/products/', views.products_by_category),
    path('products/', views.product_list),
    path('products/<int:id>/', views.product_detail),
    path('products/<int:pk>/reviews/', views.Reviews.as_view()),
]
