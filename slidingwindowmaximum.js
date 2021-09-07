
// -------------------Solution 1:----------------
// const array = [1,3,-1,-3,5,3,6,7]
// const k = 3
// const newarray = []
// const func = () => {
//     if (array.length < k) return;
//     newarray.push(Math.max(...array.slice(0,k)))
//     array.shift()
//     func()
// }
// func();
// console.log(newarray)

// ------------------Solution 2----------------
// const array = [1,3,-1,-3,5,3,6,7]
// const k = 3
// const newarray = []
// const func = () => {
//     if (array.length < k) return;
//     newarray.push(Array.from(array.slice(0,k)))
//     array.shift()
//     func()
// }
// func()
// // console.log(newarray)

// console.log(newarray.map((arr) => Math.max(...arr)))






