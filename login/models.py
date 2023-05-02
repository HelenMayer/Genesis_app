from django.db import models


class NewUser(models.Model):
    first_name = models.CharField('Имя', max_length=50)
    last_name = models.CharField('Фамилия', max_length=50)
    otchestvo = models.CharField('Отчество', max_length=50, default='')
    teams_name = models.CharField('Название команды', max_length=50)
    login = models.CharField('Логин', max_length=50, default='')
    password = models.CharField('Пароль', max_length=50, default='')
    email = models.CharField('Электронная почта', max_length=50)
    phone_number = models.CharField('Номер телефона', max_length=12)
    doc_number = models.CharField('Номер договора', max_length=50, default='')

    def __str__(self):
        return self.teams_name