// alert('Hello World')
let age = 50,
  year = 2002;

console.log(age, year);
age = 52;
console.log(age);

const abc = 23;
console.log(abc);
// abc=65

let firstName = "Prerit";
let middleName = "Kumar";
let lastName = "Jain";
let fullName = firstName + " " + middleName + " " + lastName;
console.log(fullName);
let helo = fullName.toUpperCase();
console.log(helo);
console.log(fullName.toLowerCase());
console.log(fullName.lastIndexOf("a"));
console.log(fullName.slice(2, 9));
console.log(fullName.substr(4, 10));
// console.log(5/firstName.length)
const title = "Harry Potter";
const author = "JK Rowling";
const likes = "10M";
let result = `The book called ${title} by ${author} has ${likes} likes`;
console.log(result);
console.log(age==42)