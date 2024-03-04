// EXAMPLE 1 - Create an Object from Two Arrays in JavaScript

const keys = ['name', 'age', 'country'];
const values = ['bobby', 30, 'Chile'];

const obj = {};

keys.forEach((element, index) => {
  obj[element] = values[index];
});

// 👉️ { name: 'bobby', age: 30, country: 'Chile' }
console.log(obj);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Defining a reusable function

// function toObject(keys, values) {
//   const obj = {};

//   keys.forEach((element, index) => {
//     obj[element] = values[index];
//   });

//   return obj;
// }

// const arr1 = ['name', 'age', 'country'];
// const arr2 = ['bobby', 30, 'Chile'];

// const obj = toObject(arr1, arr2);

// // 👇️ { name: 'bobby', age: 30, country: 'Chile' }
// console.log(obj);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Create an Object from Two Arrays using Array.reduce()

// const keys = ['name', 'age', 'country'];
// const values = ['bobby', 30, 'Chile'];

// const obj = keys.reduce((accumulator, key, index) => {
//   return {...accumulator, [key]: values[index]};
// }, {});

// // 👇️️ {name: 'bobby', age: 30, country: 'Chile'}
// console.log(obj);

// ------------------------------------------------------------------

// // EXAMPLE 4 - Defining a reusable function

// function toObject(keys, values) {
//   const obj = keys.reduce((accumulator, key, index) => {
//     return {...accumulator, [key]: values[index]};
//   }, {});

//   return obj;
// }

// const arr1 = ['name', 'age', 'country'];
// const arr2 = ['bobby', 30, 'Chile'];

// const obj = toObject(arr1, arr2);

// // 👇️ { name: 'bobby', age: 30, country: 'Chile' }
// console.log(obj);

// ------------------------------------------------------------------

// // EXAMPLE 5 - Create an Object from Two Arrays using Object.assign()

// function toObject(keys, values) {
//   const obj = Object.assign(
//     ...keys.map((key, index) => ({
//       [key]: values[index],
//     })),
//   );

//   return obj;
// }

// const arr1 = ['name', 'age', 'country'];
// const arr2 = ['bobby', 30, 'Chile'];

// const obj = toObject(arr1, arr2);

// // 👇️ { name: 'bobby', age: 30, country: 'Chile' }
// console.log(obj);

// ------------------------------------------------------------------

// // EXAMPLE 6 - Create an Object from Two Arrays using Object.fromEntries()

// function toObject(keys, values) {
//   const obj = Object.fromEntries(
//     keys.map((key, index) => [key, values[index]]),
//   );

//   return obj;
// }

// const arr1 = ['name', 'age', 'country'];
// const arr2 = ['bobby', 30, 'Chile'];

// const obj = toObject(arr1, arr2);

// // 👇️ { name: 'bobby', age: 30, country: 'Chile' }
// console.log(obj);
