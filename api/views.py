from django.shortcuts import render

from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import UserSerializer, GetUserSerializer, CreateUserSerializer
from .models import User


class UserView(generics.ListAPIView):
    queryset = User.objects.all()
    # queryset = User.objects.all().delete()
    serializer_class = UserSerializer


class GetUser(APIView):
    serializer_class = GetUserSerializer

    def post(self, request, format=None):

        email = request.data.get('email')
        password = request.data.get('password')

        user = User.objects.filter(email=email)
        if len(user) > 0:
            credentials = GetUserSerializer(user[0]).data
            if credentials['password'] == password:
                return Response(UserSerializer(user[0]).data, status=status.HTTP_200_OK)
            else:
                return Response({'Invalid Data': 'Wrong Password.'}, status=status.HTTP_404_NOT_FOUND)
        elif len(user) == 0:
            return Response({'User Not Found': 'Invalid Email.'}, status=status.HTTP_404_NOT_FOUND)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)


class CreateUser(APIView):
    serializer_class = CreateUserSerializer

    def post(self, request, format=None):

        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            email = serializer.data.get('email')
            password = serializer.data.get('password')
            first_name = serializer.data.get('first_name')
            last_name = serializer.data.get('last_name')

            user = User(email=email, password=password,
                        first_name=first_name, last_name=last_name)
            user.save()
            return Response(UserSerializer(user).data, status=status.HTTP_201_CREATED)
        else:
            queryset = User.objects.filter(email=serializer.data.get('email'))
            if queryset.exists():
                return Response({'Conflict': 'Email Already Registered'}, status=status.HTTP_409_CONFLICT)
            else:
                return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)

