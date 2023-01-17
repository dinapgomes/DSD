from django.db import models

class Pais(models.Model):
   nome_pais = models.CharField(max_length=30)
   moeda_local = models.CharField(max_length=30)
   adicionada_em = models.DateTimeField(auto_now_add=True)
   
   def __str__(self):
       return self.nome_pais