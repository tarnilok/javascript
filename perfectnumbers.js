//In number theory, a perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. For instance, 6 has divisors 1, 2 and 3 (excluding itself), and 1 + 2 + 3 = 6, so 6 is a perfect number.

// const input = Number(prompt("enter a positive number to check whether it is a perfect number"))


// -- 1 --
// let sum = 0;
// for( let i = 1; i <= input/2; i++ ) {
//     if (!(input % i)) sum += i 
// }
// sum == input && sum != 0
//     ? console.log(`number => ${input}, sum of its divisors => ${sum} ==> PERFECT NUMBER`) 
//     : console.log(`number => ${input}, sum of its divisors => ${sum} ==> NOT PERFECT NUMBER`)


// -- 2 --
// let sum = 0;
// for( let i = Math.floor(input/2) ; i > 0 ; i-- ) {
//     if (!(input % i)) sum += i 
// }
// sum == input && sum != 0 
//     ? console.log(`number => ${input}, sum of its divisors => ${sum} ==> PERFECT NUMBER`) 
//     : console.log(`number => ${input}, sum of its divisors => ${sum} ==> NOT PERFECT NUMBER`)

// -- 3 --
// let arr = []
// for (let i = 1; i <= input/2; i++) {
//     arr.push(i)
// }
// const sum = arr.filter(n => !(input % n)).reduce((sum, item) => sum + item, 0)
// sum == input && sum != 0
//      ? console.log(`number => ${input}, sum of its divisors => ${sum} ==> PERFECT NUMBER`) 
//      : console.log(`number => ${input}, sum of its divisors => ${sum} ==> NOT PERFECT NUMBER`)

// -- 4 -- ???????????
// let arr = []
// for (let i = 1; i <= input/2; i++) {
//     arr.push(i)
// }
// // console.log(arr)
// const sum = arr.reduce((total, curVal) => {
//     if (!(input % curVal)) total + curVal
// }, 0)
// sum == input && sum != 0
//      ? console.log(`number => ${input}, sum of its divisors => ${sum} ==> PERFECT NUMBER`) 
//      : console.log(`number => ${input}, sum of its divisors => ${sum} ==> NOT PERFECT NUMBER`)



// -- 5 --
// const isPerfect = (numb) => {
//     let sum = 0
//     for( let i = 1; i <= numb/2; i++ ) {
//              if (!(numb % i)) sum += i 
//          }
//     sum == numb && sum !== 0
//         ? console.log(`number => ${numb}, sum of its divisors => ${sum} ==> PERFECT NUMBER`) 
//         : console.log(`number => ${numb}, sum of its divisors => ${sum} ==> NOT PERFECT NUMBER`)
// }
// isPerfect(input);

// -- 6 --
// let arr = []
// for (let i = 1; i <= input/2; i++) {
//     arr.push(i)
// }

// let sum = 0
// arr.forEach(el => {
//     if (!(input % el)) sum += el
// });

// sum == input && sum !== 0
//      ? console.log(`number => ${input}, sum of its divisors => ${sum} ==> PERFECT NUMBER`) 
//      : console.log(`number => ${input}, sum of its divisors => ${sum} ==> NOT PERFECT NUMBER`)

// -- 7 --
// let arr = []
// for (let i = 1; i <= input/2; i++) {
//     arr.push(i)
// }
// let sum = 0
// for (const i of arr) {
//     if (!(input % i)) sum += i
// }
// sum == input && sum !== 0
//      ? console.log(`number => ${input}, sum of its divisors => ${sum} ==> PERFECT NUMBER`) 
//      : console.log(`number => ${input}, sum of its divisors => ${sum} ==> NOT PERFECT NUMBER`)

// -- 8 --
// let arr = []
// for (let i = 1; i < input; i++) {
//     arr.push(i)
// }
// let sum = 0
// Array.from(arr, (j) => {
//     if (!(input % j)) sum += j
// })
// sum == input && sum !== 0
//      ? console.log(`number => ${input}, sum of its divisors => ${sum} ==> PERFECT NUMBER`) 
//      : console.log(`number => ${input}, sum of its divisors => ${sum} ==> NOT PERFECT NUMBER`)


