
from django.urls import path
from .views import UserView , GetUser , CreateUser 

urlpatterns = [
    path('users/', UserView.as_view()),
    path('user/', GetUser.as_view()),
    path('create-user/', CreateUser.as_view()),
    # path('get-number/', GetNumber.as_view())
]
