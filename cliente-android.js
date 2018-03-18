const http = require('http');

const config = {
    hostname: 'localhost',
    port: 3000,
    path: '/produtos',
    headers: {
        'Accept': 'application/json'
    }
}

http.get(config, (req) => {
    console.log(req.statusCode);
    let data = '';
    req.on('data', (body) => {
        data += body;
    });

    req.on('end', () => {
        console.log(data.toString());
    });
});