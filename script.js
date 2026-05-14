
// ------>>LOOPS<<-------------

// while (count <= 100) {
//  console.log(count)
//  count = count + 1;
// }

// for (let i = 1; i <= 20; ++i) {
    // if (i % 3 === 0 && i % 5 === 0) {
        // console.log(`${i} -> Frontend Simplified`)
    // }
    // else if (i % 3 === 0) {
        // console.log(`${i} -> Frontend`)
    // }
    // else if (i % 5 === 0) {
        // console.log(`${i} -> Simplified`)
    // }
    // else {
        // console.log(`${i} -> ${i}`)
    // *}
// }


// const str = "Get Focused"

// for (let i = 0; i < str.length; ++i) {
    // console.log(str[i])
// }

// -----FUNCTIONS-------

// Function definition
// function welcomePersonToFES (firstName, lastName) {
    // console.log(`Welcome to FES, ${firstName} ${lastName}`)
// }

// Call the function
// welcomePersonToFES(`David`, `Bragg`);

// FIRST OPTION -------------

// function celsiusToFahrenheit (celsius) {
    // return celsius * 1.8 + 32;
// }

// console.log(celsiusToFahrenheit(0))
// console.log(celsiusToFahrenheit(10))
// console.log(celsiusToFahrenheit(30))

// SECOND OPTION ------------

// const celsiusToFahrenheit = (celsius) => {
    // return celsius * 1.8 + 32
// }

// console.log(celsiusToFahrenheit(0))
// console.log(celsiusToFahrenheit(10))
// console.log(celsiusToFahrenheit(30))

// -------------ARRAYS--------------

// ** let arr = [20, 30, 40, 50, 100]

// First element of array:
// console.log(arr[0])

//  Last element of array:
// console.log(arr[arr.length - 1])

// Add element onto end of array:
// arr.push(200)

// console.log(arr);

// **** MEMORIZE THIS SYNTAX:
// arr.filter() => {}

// ----- FILTER METHOD --> SHORT VERSION -----

// let newArr = arr.filter(element => element < 50)

// console.log(newArr)

// ---- FILTER METHOD --> LONG VERSION ------- 

// let newArr = arr.filter((element) => {
    // console.log(element)
    // if (element <50) {
        // return true;
    // }
// })

// let grades = ['A+', 'A', 'FAIL']

// let goodGrades = grades.filter(element => element !== 'FAIL')

// console.log(goodGrades)

// --- EXAMPLE of LOOP METHOD with if statement ---

// let grades = ['A+', 'A', 'FAIL']

// let goodGrades = []

// for (let i = 0; i < grades.length; ++i) {
    // if (grades[i] !== 'FAIL') {
    //   goodGrades.push(grades[i]);
    // }
// }

// console.log(goodGrades);

// --- EXAMPLE of *MAP* ARRAY METHOD ---

let dollars = [1 ,5 ,10, 3];

let cents = dollars.map(element => element * 100)

console.log(cents)

