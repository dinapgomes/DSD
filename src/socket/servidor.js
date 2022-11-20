//definindo funções para os eventos
function receberRequisicao(socket) {
  var processarRequisicao = function (data) {
    // escreve no log no Servidor os dados da requisição
    console.log(
      "### cliente [" + this.remoteAddress + ":" + this.remotePort + "]"
    );
    console.log("recebeu: " + data.toString());
    console.log("###");

    const numero = Math.floor(Math.random() * 2);
    // envia mensagem de retorno para o cliente
    if (numero.toString() === data.toString()) {
      this.write("voce acertou! :)");
    } else {
      this.write(`voce errou! o número era ${numero} :(`);
    }

    // fecha conexão
    this.end();
  };
  socket.on("data", processarRequisicao);
}
function ligar() {
  console.log("# Servidor AGUARDANDO conexões...");
}
function desligar() {
  console.log("# Servidor DESLIGADO");
}

// cria um objeto para o socket Servidor
var server = require("net").createServer();

// define os eventos do socket Servidor
server.on("listening", ligar);
server.on("close", desligar);
server.on("connection", receberRequisicao);

// abre o socket servidor na porta 8000
server.listen(8000, function () {
  console.log("server listening to " + server.address());
});
