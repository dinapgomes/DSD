 # Guia para acesso (Linux):
1: Criar ambiente virtual python3 -m venv env

2: source env/bin/activate

3: Instalar biblioteca Pyro4 -> pip install Pyro4

4: Ativar o arquivo requirements.txt -> pip freeze > requirements.txt.

5: Certificar que o requirements está com todas as dependências: -> pip install -r requirements.txt 

 # Guia para acesso (Windows):
 
 1: Criar ambiente virtual python -m venv env
 
 2: env\Scripts\activate.bat
 
 3: Instalar biblioteca Pyro4 -> pip install Pyro4
 
 4: Ativar o arquivo requirements.txt -> pip freeze > requirements.txt.
 
 5: Certificar que o requirements está com todas as dependências: -> pip install -r requirements.txt 

 

tutorial-env\Scripts\activate.bat



# Como entrar

1: Iniciar o localhost no terminal -> python3 -m Pyro4.naming

2: Em uma nova aba, iniciar o servidor -> python3 Servidor.py

3: Em uma nova aba, iniciar o cliente -> python3  Cliente.py
