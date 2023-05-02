from django.db import models


class New(models.Model):
    title = models.CharField('Заголовок', max_length=50)
    description = models.CharField('Описание', max_length=250)
    full_text = models.TextField('Полный текст')
    data_of_publish = models.DateTimeField('Дата и время публикации')
    status = models.CharField('Статус', max_length=20)

    def __str__(self):
        return self.title
