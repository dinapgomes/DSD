from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Pais
from .serializers import ṔaisSerializer


@api_view(['GET', 'POST'])
def pais(request):
    
    if request.method == 'GET': # Usuário solicitando dados
        snippets = Pais.objects.all()
        serializer = ṔaisSerializer(snippets, many=True)
        return Response(serializer.data)

    elif request.method == 'POST': # Usuário criando dados
        serializer = ṔaisSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save() # Salvando para o banco de dados
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)