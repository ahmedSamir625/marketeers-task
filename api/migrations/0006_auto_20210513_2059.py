# Generated by Django 3.2.2 on 2021-05-13 18:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_auto_20210513_2046'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Login',
        ),
        migrations.AddField(
            model_name='user',
            name='password',
            field=models.CharField(default='', max_length=30),
        ),
    ]
