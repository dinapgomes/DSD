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

  // const numero = Math.floor(Math.random() * 2);
  // var frase = 3;
  switch (msg.toString()) {
    case "1":
      console.log(
        "Pus o meu sonho num navio e o navio em cima do mar;- depois, abri o mar com as mãos, para o meu sonho naufragar - Cecília Meireles"
      );
      break;
    case "2":
      console.log(
        "Uma força irrestível é capaz de sempre conduzir todo aquele que busca a justiça e também te faz sorrir - Ruan Franklin"
      );
      break;
    case "3":
      console.log(
        "Todas as coisas do mundo não cabem numa ideia. Mas tudo cabe numa palavra, nesta palavra tudo.- Arnaldo Antunes"
      );
      break;
    default:
      console.log("Fim da execução");
  }
  // envia mensagem de retorno para o cliente
});

servidor.on("listening", () => {
  var address = servidor.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

servidor.bind(13000);
// server listening 0.0.0.0:13000
