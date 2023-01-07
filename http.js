const { log } = require('console');
const http = require('http')

http.createServer( (request, response) => {
    response.write('Hello world')

    response.end();
}).listen(3000)
console.log('servidor escuchando en el puerto 3000');