/**
 * FS sync
 * crea archivos eliminarlos leer ... CRUD
 */
const fs = require('fs');

const texto = fs.readFileSync('./data/first.txt','utf-8')
const texto2 = fs.readFileSync('./data/second.txt')

 console.log(texto);
 console.log(texto2.toString());

 fs.writeFileSync('./data/pedro.css','body{ background:#000;} ');