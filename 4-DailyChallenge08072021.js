/* 
welcome the user with prompt
ask which convertion type does the user want?
Celcius -> Fahrenheit or Fahrenheit -> Celcius
offer the user an option to exit
avoid to enter unwanted value we offer
then take the value to convert
there should be two decimal places in output
*/

function converter() {
    var choice = prompt(`For Fahrenheit to Celcius Convertion Enter 1,
For Celcius to Fahrenheit Convertion Enter 2
Q for Exit`).trim().toLowerCase()

    let degree;
    
    choice === "1" ? degree = prompt("Enter the Fahrenheit degree to convert Celcius").trim() : choice === "2" ? degree = prompt("Enter the Celcius degree to convert Fahrenheit").trim() : choice === "q" ? alert("We will miss you :D") : converter();

    if (choice === "1") return (5 / 9 * (degree - 32)).toFixed(2)
    if (choice === "2") return (9 / 5 * degree + 32).toFixed(2)
}


console.log(converter());