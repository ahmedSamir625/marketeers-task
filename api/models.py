from django.db import models
from django.db.models.fields import CharField
import random

def generate_random_number():
    ran_number = random.uniform(1, 999)

    return ran_number

class User(models.Model):
    email = models.CharField(max_length=30, null=False , default='',unique=True)
    password = models.CharField(max_length=30, null=False, default='')
    first_name = CharField(max_length=20, null=False ,default='')
    last_name = CharField(max_length=20, null=False,default='')
    number = models.IntegerField( null=False , default=generate_random_number)




# class Number(models.Model):
#     value = models.IntegerField( null=False , default=123,unique=True)
   
