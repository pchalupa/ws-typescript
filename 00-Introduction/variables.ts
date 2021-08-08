// Strings
let variable: string; // let variable = 'bar'

variable = 'foo';
// variable = true;
// variable = 1;
// variable = {};

// Arrays
let array: number[]; // let array: Array<number>

array.push(1);
// array.push('foo');
const item = array.pop();

// Objects
let object: { name: string; age: number };

object.name = 'test';
// object.age = 'test';

// Functions
const add = (a: number, b: number): number => a + b;

console.log(add(1, 1));
console.log(add('1', '1'));
