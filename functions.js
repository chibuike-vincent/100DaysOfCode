//#100DaysOfCode

// Day 7

// we going to be looking to be looking  function and we are to start with the es5 function before moving to the es6. A function has three body parts which are the input (known as the argument), code and output (known as return value)

// for a start lets print our normal Hello World! to the screen.

let  greeting = function () {
  console.log('Hello World!')
}

greeting()

// let us write a function to solve some mathematical problems-- say multiply, add or subtract two numbers

let multiply = function (num1, num2) {
  let result = num1 * num2
  return result
}
console.log(multiply(2,4)) // 8

let addition = function (num1, num2) {
  let result = num1 + num2
  return result
}
console.log(addition(2,4)) // 6

let subtract = function (num1, num2) {
  let result = num1 - num2
  return result
}
console.log(subtract(2,4)) //-2

// lets do more with conversion from fahrenheit to celsius

let conversion = function (fahrenheit) {
  let celsius = (fahrenheit - 32) * 5 / 9
  return celsius
}
console.log(conversion(78 )+ '^C')// 25.555555555555557^C

// Some times our function can return undefined or null. When our argument is not given or assigned a value, we get undefined and when the it is assigned null in any case it returns null even if we have given it a value somewhere else.

// now lets look at this

let age = function (age) {
  console.log(age) // undefined
}

let newage = age()
console.log(newage) // undefined