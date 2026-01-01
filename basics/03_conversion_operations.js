let score = "33qaq"
let score2 = null
//console.log(typeof score); => object
//console.log(typeof(score)); => object

let valueInNumber = Number(score2)
//console.log(typeof score); => object
//console.log(typeof valueInNumber); => number
//console.log(valueInNumber);//It gives NaN means its Not a Number

//"33" => 33
// "33qwa" => NaN
// true => 1, false => 0
// "" => false , "Raja" =>true
//let isLoggedIn = 1
let isLoggedIn = "Raja"
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn); => true
let someNum = 33
let checkNum = String(someNum)
//console.log(checkNum); => "33"
//console.log(typeof(checkNum)); => string

// -------------------------Operaions----------------------------------
let str1 = "Hello"
let str2 = " Raja"
let str3 = str1 + str2
//console.log(str3); => Hello Raja

let num1 = 33
let num2 = 55
let num3 = num1 + num2
//console.log(num3); => 88

// When we add a number with a string it will concatenate as a string
let mixed = 33 + "Raja"
//console.log(mixed); => 33Raja
//console.log(typeof mixed); => string

// When we subtract a number with a string it will convert the string to number and then perform subtraction
let mixed2 = 33 - "3"
//console.log(mixed2); => 30
//console.log(typeof mixed2); => number

// When we multiply a number with a string it will convert the string to number and then perform multiplication
let mixed3 = 33 * "3"
//console.log(mixed3); => 99
//console.log(typeof mixed3); => number

// When we divide a number with a string it will convert the string to number and then perform division
//let mixed4 = 33 / "3"
//console.log(mixed4); => 11
//console.log(typeof mixed4); => number

// When we try to do arithmetic operation other than addition with a string which cannot be converted to number it will give NaN
let mixed5 = 33 - "Raja"
//console.log(mixed5); => NaN (Not a Number)
//console.log(typeof mixed5); => number

// some basics
//console.log("1" + 2); => "12"
//console.log(1+"2");   => "12"
//console.log("1"+2+2); => "122"
//console.log(1+"2"+2); => "122"
//console.log(1+2+"2"); // => "32"

