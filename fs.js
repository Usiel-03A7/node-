/**
 * FS sync
 * crea archivos eliminarlos leer ... CRUD
 */
const fs = require('fs');

// manera normal
// const texto = fs.readFileSync('./data/first.txt','utf-8')
// const texto2 = fs.readFileSync('./data/second.txt')

//  console.log(texto);
//  console.log(texto2.toString());

//  fs.writeFileSync('./data/pedro.css','body{ background:#000;} ');

//manera asincrona <= 
fs.readFile('./data/first.txt', (err,data) => {
    if(err){
        console.log('Hay un error'); 
    }
    console.log(data.toString());
})