# Generated by Django 3.2.2 on 2021-05-12 15:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_delete_login'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='email',
            field=models.CharField(default='', max_length=30, unique=True),
        ),
        migrations.AddField(
            model_name='user',
            name='first_name',
            field=models.CharField(default='', max_length=20),
        ),
        migrations.AddField(
            model_name='user',
            name='last_name',
            field=models.CharField(default='', max_length=20),
        ),
        migrations.AddField(
            model_name='user',
            name='password',
            field=models.CharField(default='ahmed123', max_length=30),
        ),
        migrations.AddField(
            model_name='user',
            name='userID',
            field=models.CharField(default='', max_length=20, unique=True),
        ),
    ]