const { first } = require('rxjs');

const myArray = [1, 2, 3, 4, 5];
const myArray2 = [6, 7, 8, 9, 10];

console.log(...myArray);
console.log(1, 2, 3, 4, 5);

const newArray = [...myArray, ...myArray2, 11, 12];
console.log(newArray);

const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};

const userDetail = {
  city: 'New York',
  country: 'USA',
};

const copy = { ...user };
const copy2 = { ...user, age: 35 }; // Copie + modification de la valeur de la prop. 'age'

console.log(copy2);
const fullUser = { ...user, ...userDetail };
console.log(fullUser);

const fullUser2 = { ...user, ...userDetail, city: 'Las Vegas', street: 'Main Street' };
console.log(fullUser2);

// La fonction .map()

const users = [
  { firstName: 'John', lastName: 'Doe', age: 30 },
  { firstName: 'Jane', lastName: 'Doe', age: 25 },
  { firstName: 'Bob', lastName: 'Smith', age: 40 },
];

const users2 = users.map((u) => {
  return { ...u, city: 'new York' };
});
console.log(users2);
