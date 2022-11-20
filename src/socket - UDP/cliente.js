const dgram = require("dgram");
const cliente = dgram.createSocket("udp4");

const mensagem = "0";

cliente.send(mensagem, 13000, "localhost", (err) => {
  cliente.close();
});
