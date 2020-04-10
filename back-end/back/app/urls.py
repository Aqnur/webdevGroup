from django.urls import path
from app import views
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('users/', views.UserList.as_view()),
    path('login/', views.login),
    path('logout/', views.logout),
    path('', views.description),
    path('register/', csrf_exempt(views.Register.as_view())),
]
