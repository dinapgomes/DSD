const dgram = require("dgram");
const { type } = require("os");
const servidor = dgram.createSocket("udp4");

servidor.on("error", (err) => {
  console.log(`server error:\n${err.stack}`);
  servidor.close();
});

servidor.on("message", (msg, rinfo) => {
  // rinfo = informação do endereço remoto
  console.log(
    `Mensagem recebida: \n\n ${msg} \n\n De: ${rinfo.address}:${rinfo.port}`
  );

  const numero = Math.floor(Math.random() * 2);
  // envia mensagem de retorno para o cliente

  if (numero.toString() === msg.toString()) {
    console.log("voce acertou! :)");
  } else {
    console.log(`voce errou! o número era ${numero} :(`);
  }
});

servidor.on("listening", () => {
  var address = servidor.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

servidor.bind(13000);
// server listening 0.0.0.0:13000
