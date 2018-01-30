const http = require('http');

let server = http.createServer((req, resp) => {
    resp.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
    if(req.url == '/produtos'){
        resp.write(`
        <http>
            <body>
            <h1>Produtos</h1>
            </body>
        </http>
        `)
    } else {
        resp.write(`
        <http>
            <body>
            <h1>Main page</h1>
            </body>
        </http>
        `)
    }
    resp.end();
});

server.listen(3000);

console.log('servidor criado');