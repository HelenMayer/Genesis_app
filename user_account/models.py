from django.db import models


class Booking(models.Model):
    id = models.IntegerField('id', 'primary_key=True')
    time_of_booking = models.CharField('Время для брони', max_length=50)
    time_of_books_creating = models.TimeField('Время создания брони')
    status = models.CharField('Статус', max_length=50)
    user_id = models.IntegerField('id пользователя')

    def __str__(self):
        return self.id


class Code(models.Model):
    value = models.CharField('Код для входа в зал', max_length=15)

    def __str__(self):
        return self.value
