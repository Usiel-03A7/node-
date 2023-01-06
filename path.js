/**
 * path hace ajustes que tienen que ver con directorios 
 */
const path = require('path')

console.log(path.join());
const filePath = path.join('come','together','all.js')

console.log('----------');
console.log(path.basename(filePath));
console.log('----------');
/**
 * ayuda a poner un link multiplataforma en caso de hacer un server
 */
console.log(path.resolve(''))

const dir = path.parse(filePath);

console.log('dir ');
console.log(dir.dir);
console.log(dir.base);
console.log(dir.ext);
console.log(dir.root);