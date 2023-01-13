let users = [
  {name: 'Usiel', age: 22},
  {name: 'Pedro', age: 30},
  {name: 'Alberto', age: 34},
  {name: 'Juan', age: 50}
];

// const namesHi = names.map(function (name) {
//   console.log('Hola', name);
//   console.log('-------------');
//   console.log(`hola ${name}`);
// }
// )

// // the array contain index,element & array
// for (let i = 0; i < users.length; i++) {
//   const element = users[i];
//   console.log(i, user.name);
// };
// //
// users.forEach((user, index) => {  // name => names[i]
//   console.log(index, user.name);
// });

users = [...users, {name: 'Javier', age: 60}]

const newUsers = users.map((user, index)=>{
  return {...user, gender: 'female', id: index +1};
})

console.log(newUsers);

const filteredUsers = newUsers.filter(element => element.age < 50)
console.log(filteredUsers);

// ['Usiel','Pedro','Alberto','Juan'].join(' ')