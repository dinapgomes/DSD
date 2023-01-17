from django.db import models

class Clube(models.Model):
    nome = models.CharField(max_length=20)
    quantidade_jogadores = models.IntegerField()
    criado_em = models.DateTimeField(auto_now_add=True)
    def __str__(self):
       return self.nome