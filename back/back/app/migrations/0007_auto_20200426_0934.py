# Generated by Django 3.0.4 on 2020-04-26 09:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0006_review'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='description',
            field=models.CharField(max_length=500),
        ),
    ]
