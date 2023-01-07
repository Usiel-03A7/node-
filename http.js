const { log } = require('console');
const http = require('http')

http.createServer((request, response) => {

    if (request.url === '/usiel') {
        response.write('Usiel online');
        return response.end();
    }
    if (request.url === '/') {
        response.write('Estas en home');
       return response.end();
    }
    response.write(`
    <h1> no found page</h1>
    <p>this page is not found</p>
    <a href='/' > back home</a>
    `);
    response.end();

}).listen(3000)
console.log('servidor escuchando en el puerto 3000');