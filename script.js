
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

// let goodGrades = grades.filter((element) => {
    // console.log(element)
    // if (element !== `FAIL`) {
        // return true;
    // }
// })

// console.log(goodGrades)

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

/**
 * let dollars = [1 ,5 ,10, 3];

// --long method--

// let cents = dollars.map(element => {
    // console.log(element)
    // return element * 100
// })

// console.log(cents)

// --short method--

// let cents = dollars.map(element => element * 100)

//  consol.log(cents)

//  --without using map method--
let dollars = [1 ,5 ,10, 3];
// step 1: create new `cents` array
let cents = [];

// step 2: loop over every element in `dollars`
    // multiply the element by 100
    // add this element onto `cents` array
for (let i = 0; i < dollars.length; ++i) {
    cents.push(dollars[i] * 100);
}
// step 3: console log cents
console.log(cents);
*/

/**
 * Create a register function that accepts:
 * - username
 * - email
 * - password
 * - subscriptionStatus
 * - discordId
 * - lessonsCompleted
 * 
 * Inside your register function:
 * 1. Create a user object
 * 2. Push this user object onto the `users` array
 * 
 * 
 */

// function register(user){
    // users.push(user);
// }

// register({
    // username: `tanner`, 
    // email: `tanner@gmail.com`, 
    // password: `test123`,
    // subscriptionStatus: `VIP`,
    // discordId: `tanner001`,
    // lessonsCompleted: [0, 1]
// });

// console.log(user);

// --------- DOM -----------------
// ------ *add /defer/ to jss line in html header*-------------
// 

// First way of accessing an element
// ***Best if the element you are accessing does not have an ID
// console.log(document.querySelector('.title'));
// ^^ most commonly used ^^ similar to css
/* use a dot to access a class; use a hash to access an ID

// Second way of accessing an element
// ***Best practice for accessing element with ID
console.log(document.getElementById('title'))

// ***CHANGE HTML***/

// document.querySelector(".title").innerHTML += "Frontend Simplified"
// ^^ this will change the title with =
// ^^ this will add to the title with +=

// ***CHANGE CSS***/
// document.querySelector(".title").style.fontSize = '100px'
// ^^ this will change the title with any property you type

// ----EXAMPLE of CSS CHANGE USING FUNCTION-----
// function changeTitleToRed() {
    // document.querySelector(".title").style.color = 'red'
    // console.log('clicked');
// }

// ---TOGGLE DARK MODE--- minute 11 in DOM video-----

// function toggleDarkMode() {
    // document.querySelector('body').classList.toggle("dark-theme")
// }

// ------------***PROMISES***-------------------

// fetch("https://jsonplaceholder.typicode.com/users/1")

// 1. Then

fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
    response.json().then(data => {
        console.log(data)
    })
})

// 2. Async/Await




