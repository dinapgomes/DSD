// definindo funções
function abrirConexao() {
  console.log("### CONECTADO");
}
function receberMensagem(data) {
  console.log("### Pacote recebido:\n");
  console.log(data.toString() + "\n");
}
function finalizarConexao() {
  console.log("### DESCONECTADO");
}

// criando um objeto para o socket cliente
var socketCliente = require("net").Socket();

// Definindo os eventos para o socket cliente
socketCliente.on("connect", abrirConexao);
socketCliente.on("data", receberMensagem);
socketCliente.on("end", finalizarConexao);

// conectando, enviando mensagem de requisição
//   e fechando o socket cliente
socketCliente.connect(8000, "localhost");
socketCliente.write("0");
socketCliente.end();
