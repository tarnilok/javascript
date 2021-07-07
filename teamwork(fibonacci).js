// 1. Solution
// const fibonacci = function (numb) {
//     let list = [1,2];
//     for (i = 2 ; i <= numb; i++) {
//         list.push(list[i-1] + list[i-2]);
   
//     }
//     return list[numb-1];
// }
// console.log(fibonacci(7));

// 2. Solution
// const fibonacci2 = function (numb) {
//     let list = [];
//     for (i = 0; i <= numb; i++) {
//         (i === 0 || i === 1) ? list.push(i+1) : list.push(list[i-1] + list[i-2]);
//     }
//     return list[numb-1]
// }
// console.log(fibonacci2(3));

// 3. Solution
// const fibonacci3 = function (numb) {
//     let list = [];
//     let total = 0
//     for (i = 0, x = 1, y = 1; i <= numb; i++) {
//         list.push(y);
//         total = x + y;
//         x = y;
//         y = total;
//     }
//     return list[numb-1]
// }
// console.log(fibonacci3(3));

// 4. Solution
// const fibonacci4 = numb => {
//     let list = [];
//     for (i = 0; i <= numb; i++) {
//         (i === 0 || i === 1) ? list.push(i+1) : list.push(list[i-1] + list[i-2]);
//     }
//     return list[numb-1]
// }
// console.log(fibonacci4(12));

// 5. Solution
// const fibonacci5 = numb => {
//     let x = 0, y = 1, result, i = 0;
//     while (i < numb) {
//         result = x + y;
//         x = y;
//         y = result;    
//         i++;
//     }
//     return result
// }
// let n = prompt("What number do you want in Fibonacci Sequence starting with 1?").trim()
// console.log(fibonacci5(n));

// 6. Solution
// const fibonacci6 = numb => {
//     for (var i = 0, x = 0, y = 1, result; i < numb; i++) {
//         result = x + y;
//         x = y;
//         y = result;
//     }
//     return result;
// }
// console.log(fibonacci6(12));

// 7. Solution
// function fibonacci(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     }else;
//     return fibonacci(n-1) + fibonacci(n-2)
// }

// console.log(fibonacci(7));




