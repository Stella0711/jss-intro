
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

const celsiusToFahrenheit = (celsius) => {
    return celsius * 1.8 + 32
}

console.log(celsiusToFahrenheit(0))
console.log(celsiusToFahrenheit(10))
console.log(celsiusToFahrenheit(30))