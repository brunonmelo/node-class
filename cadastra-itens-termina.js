const http = require('http');

const config = {
    hostname: 'localhost',
    port: 3000,
    path: '/produtos',
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'content-type': 'application/json'
    }
}

const client = http.request(config, (req) => {
    console.log(req.statusCode);
    let data = '';
    req.on('data', (body) => {
        data += body;
    });

    req.on('end', () => {
        console.log(data.toString());
    });
});

let produto = {
    "titulo": "Livro da Maria cotinha",
    "descricao": "Todas as cotinhagens para você",
    "preco": 17.49
}

client.end(JSON.stringify(produto));