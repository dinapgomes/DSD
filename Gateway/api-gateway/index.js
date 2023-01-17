//index.js
const httpProxy = require('express-http-proxy');
const express = require('express');
const app = express();
var logger = require('morgan');

app.use(logger('dev'));

function selectProxyHost(req) {
   // var endereco = prompt(("Digite uma porta:" ));  - terminal do codespace não tem interação com promp
    var endereco = 3001
    if (endereco == 3000){
        return 'http://localhost:3000/clube';
    }
    else
     return 'http://localhost:3001/pais';
   
}

app.use((req, res, next) => {
    httpProxy(selectProxyHost(req))(req, res, next);
});

app.listen(10000, () => {
    console.log('API Gateway executando!');
});