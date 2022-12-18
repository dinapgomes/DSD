import Pyro4
import os
import datetime 
#Pyro4.Proxy permite que ocorra o acesso aos atributos expostos de objetos remotos
Cliente = Pyro4.Proxy("PYRONAME:RMI.calculator")
nome = input("Olá, vc tá melhor? Qual é o seu nome?").strip()
tempo = datetime.datetime.now()
print('Data: '+tempo.strftime('%d-%m-%y')+'Hora:'+tempo.strftime('%H:%M:S'))
#get_usid é a função usada para identificar informações da sessão
print(Cliente.get_usid(nome))
print("Digite aqui o número de cálculos que precisam ser realizados!!")
n=int(input("Digite um número: "))
while(n>0):
    n=n-1
    a=int(input("Digite o valor de a:"))
    b=int(input("Digite o valor de b: "))
    print("Digite o número da operação desejada: \n" +'1.SOMA \n'+
'2.SUBTRAÇÃO \n'+ '3.MULTIPLICAÇÃO \n'+ '4.DIVISÃO \n'+
'5.EXPONENCIAÇÃO \n')
    c=int(input("Digite a operação que você escolheu: "))
    if(c==1):
        print(Cliente.soma(a,b))
    elif(c==2):
        print(Cliente.subtracao(a,b))
    elif(c==3):
        print(Cliente.multiplicacao(a,b))
    elif(c==4):
        print(Cliente.divisao(a,b))
    elif(c==5):
        print(Cliente.expoenciacao(a))
    else: 
        print("Opção inválida, tente novamente!")



