/* 
welcome the user with prompt
ask which convertion type does the user want?
Celcius -> Fahrenheit or Fahrenheit -> Celcius
offer the user an option to exit
avoid to enter unwanted value we offer
then take the value to convert
there should be two decimal places in output
*/

// Solution 1
// function converter() {
//     var choice = prompt(`For Fahrenheit to Celcius Convertion Enter 1,
// For Celcius to Fahrenheit Convertion Enter 2
// Q for Exit`).trim().toLowerCase()

//     let degree;
    
//     choice === "1" ? degree = prompt("Enter the Fahrenheit degree to convert Celcius").trim() : choice === "2" ? degree = prompt("Enter the Celcius degree to convert Fahrenheit").trim() : choice === "q" ? alert("We will miss you :D") : converter();

//     if (choice === "1") return (5 / 9 * (degree - 32)).toFixed(2)
//     if (choice === "2") return (9 / 5 * degree + 32).toFixed(2)
// }

// console.log(converter());

// Solution 2

// function converter2() {
//     let choice = prompt(`For Fahrenheit to Celcius Convertion Enter 1,
//   For Celcius to Fahrenheit Convertion Enter 2
//   Q for Exit`).trim().toLowerCase()
  
//     let degree;
    
//     choice === "1" ? degree = prompt("Enter the Fahrenheit degree to convert Celcius").trim() : choice === "2" ? degree = prompt("Enter the Celcius degree to convert Fahrenheit").trim() : choice === "q" ? alert("We will miss you :D") : converter2();
  
//     if (choice === "1") return FahrtoCel(degree)
//     if (choice === "2") return CeltoFahr(degree)
//   }
  
//   function FahrtoCel(degree) {
//     let converted = (5 / 9 * (degree - 32)).toFixed(2)
//     return `${degree} °F = ${converted} °C`
//   }
//   function CeltoFahr(degree) {
//     let converted = (9 / 5 * degree + 32).toFixed(2)
//     return `${degree} °C = ${converted} °F`
//   }
  
//   console.log(converter2());