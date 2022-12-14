import Pyro4
import random
import os
import datetime
import subprocess
tempo=datetime.datetime.now()
print('data: '+tempo.strftime('%d-%m-%y')+'Hora:'+tempo.strftime('%H:%M:%S'))
#O decorador Pyro4.expose permite que métodos sejam chamados remotamente
@Pyro4.expose
class Servidor(object):
    #Função para adicionar informações de sessões. Random foi usado para gerar um número aleatório de sessão.
    def get_usid(self, name):
        return "Olá, {0}.\n" \
"Sua sessão atual de usuário é: {1}:".format(name,
random.randint(0,1000))
    def soma(self,a,b):
        return "{0} + {1} = {2}".format(a,b,a+b)
    def subtracao(self, a,b):
        return "{0} - {1} = {2}".format(a,b,a-b)
    def multiplicacao(self,a,b):
        return "{0} x {1} = {2}".format(a,b,a*b)
    def divisao(self,a,b):
        return "{0} x {1} = {2}".format(a,b,a/b)
    def expoenciacao(self,a):
        return '{0} ** {1} = {2}'.format(a,a,a**a)
#Pyro4.Daemon armazena a lógica do servidor e envia chamadas de método remoto recebidas para os objetos recomendados
daemon=Pyro4.Daemon()
#locateNS é usado para encontrar um servidor de nomes em algum lugar na rede
ns=Pyro4.locateNS()
#register registra uma URL para o servidor utilizado
url=daemon.register(Servidor)
#Para permitir que o cliente se conecte corretamente no servidor, ele precisa ser nomeado e registrado no host local, parecido com o registro de RMI em Java.
ns.register("RMI.calculator",url)
print("O servidor agora está ativado. Por favor, inicie o processo de solicitação de dados.")
#requestLoop atende às solicitações recebidas, até que isso seja interrompido por alguém.
daemon.requestLoop()



