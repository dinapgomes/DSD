from rest_framework import serializers
from .models import Pais


class PaisSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pais # Este é o modelo que será serializado
        fields = ('nome_pais', 'moeda_local')
        