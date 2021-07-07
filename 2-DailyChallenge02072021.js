/* Js Daily Challenge
Write an unnamed function.
It takes two paremeters. Tax and price
The price increases with the percentage of tax
output will be with return. 
calling function should also be added in your answers
extra: the customer bought more than one thing. with the same tax ratio find the total cost should be payed.
*/

// Solution ==> 1

// const price = function (tax, cost) {
//     for (var i = 0, total_cost = 0; i < cost.length; i++) {
//         total_cost += cost[i];
//     }
//     return total_cost + total_cost * (tax / 100)
// }
// let tax = 18;
// let cost = [10,20,30,40]; 
// console.log(`The total price is ${price(tax, cost)}`);


// Solution ==> 2

// const price = function (tax, ...cost) {
//     for (var i = 0, total_cost = 0; i < cost.length; i++) {
//         total_cost += cost[i];
//     }
//     return total_cost + total_cost * (tax / 100)
// }
// console.log(`The total price is ${price(18, 10, 20, 30, 40)}`);
