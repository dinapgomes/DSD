from zeep import Client

client = Client(wsdl=localhost)
print(client.service.Soma())
print(Client.service.Subtracao())
print(Client.service.Divisao())
print(Client.service.Multiplicacao())

