# Generated by Django 4.2 on 2023-05-01 15:10

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Booking',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('primary_key=True', models.IntegerField(verbose_name='id')),
                ('time_of_booking', models.CharField(max_length=50, verbose_name='Время для брони')),
                ('time_of_books_creating', models.TimeField(verbose_name='Время создания брони')),
                ('status', models.CharField(max_length=50, verbose_name='Статус')),
                ('user_id', models.IntegerField(verbose_name='id пользователя')),
            ],
        ),
    ]