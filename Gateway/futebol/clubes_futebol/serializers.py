from rest_framework import serializers
from .models import Clube


class ClubeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clube # Este é o modelo que será serializado
        fields = ('nome', 'quantidade_jogadores')
