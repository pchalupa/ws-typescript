//* Strings
let variable: string; // number, boolean, ...
// let variable = 'bar'

variable = 'foo';
// variable = true;
// variable = 1;
// variable = {};

//* Arrays
let array: number[] = [];
// let array = [1, 2, 3];
// let array: Array<number>

array.push(1);
// array.push('foo');
// array = ['foo'];
const item = array.pop();

//* Objects
let object: { name: string; age?: number };

object = { name: 'foo', age: 20 };
object = { name: 'bar' };
object.name = 'test';
object.age = 25;

// object = { age: 'bar' };
// object.age = 'foo';
