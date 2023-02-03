// Importa express e path

const express = require('express');

const path = require('path');

// Cria nossa aplicação express

const app = express();

// Define e configura o protocolo http

const server = require('http').createServer(app);

// Define e configura o protocolo wss (websocket)

const io = require('socket.io')(server);

// Define nossos diretórios publicos para arquivos frontend

app.use(express.static(path.join(__dirname, 'public')));

// Define onde as views irão ficar (public)

app.set('views', path.join(__dirname, 'public'));

// Define que nossa engine ejs irá exibir elements html

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');

// Define que o root da aplicação direcione para index.html

app.use('/', (req, res) => {

    res.render('index.html');

});

// Inicializa um novo array para armazenar as mensagens

// Poderia utilizar aqui um banco de dados!!! :)

let messages = [];

// 1. A cada nova conexão de um socket no frontend o io.on eh notificado

io.on('connection', socket => {

    console.log(`Novo socket conectado: ${socket.id}`);

    // 2. A cada nova conexão de socket, é enviado apenas para o socket 

    // que conectou todas as mensagens já enviadas

    socket.emit('previousMessage', messages);

    // 3. O evento emitido pelo frontend eh notificado neste socket.on

    socket.on('sendMessage', data => {

        messages.push(data); // Adiciona o objeto no array - guarda todas as mensagens

        

        // 4. Envia para todos os outros sockets conectados (broadcast) o conteúdo recebido

        socket.broadcast.emit('receivedMessage', data);

    });

});

// Executa aplicação na porta 3000

server.listen(3000);