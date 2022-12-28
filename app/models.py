# Create your models here.
from django.db import models

# Create your models here.
class Cursos(models.Model):
    cursos = models.CharField(max_length=150)
    horas = models.IntegerField()


