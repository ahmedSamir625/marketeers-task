from rest_framework import serializers
from .models import  User 



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model= User
        fields=('id','email','first_name','last_name','number')



class GetUserSerializer(serializers.ModelSerializer):
    class Meta:
        model= User
        fields=('email','password')



class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model= User
        fields=('id','email','password','first_name','last_name')

# class NumberSerializer(serializers.ModelSerializer):
#     class Meta:
#         model= Number
#         fields=('id','value',)
