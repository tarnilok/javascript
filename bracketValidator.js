// ----------SOLUTION 1 -------------------
// const isVallid  =  (br) => {
//     const brackets = {
//         "(" : ")",
//         "[" : "]",
//         "{" : "}"
//     };
//     const openersBrackets = ["(", "[", "{"];
//     const arr = [];
  
  // br = br.split("").filter(e => e !== " ").join("") // deleting empty spaces
// /*   const brackets2 =["{", "}", "[", "]", "(", ")"]; 
//  br = br.split("").filter(e => brackets2.includes(e)).join("") */ // deleting everything without things brackets containing

  
//   for (const e of br.split("")) {
//     if (openersBrackets.includes(e)) {
//         arr.push(e)
//         // console.log(e)
//     }
//     else if (e === brackets[arr[(arr.length)-1]]) {         //empty array and object are true 
//         // console.log(arr)
//         arr.pop()
//     }
//     else { return false }     // forEach and map doesn't work properly. because they execute a function on every element in an array.     forEach is a function rather than a loop and using break statement gives "syntax error: illegal break statement"
//   }
//     // console.log(arr)
//     return arr.length === 0
// }

// console.log(isVallid("()"))   //true
// console.log(isVallid("([]{[]})[]{{}()}"))  //true
// console.log(isVallid("([][]}"))   //false
// console.log(isVallid("[[]()"))   //false
// console.log(isVallid("[[]]())"))    //false
// console.log(isVallid(""))   //true
// console.log(isVallid("{   }"))  //true
// console.log(isVallid("{ [ ]   }")) //true (distance is ignored!!!)

// console.log(isVallid("..."))
// console.log(isVallid("()[.{}]"))

// -----------SOLUTION 2 -------------
// const isVallid = (br) => {
// /*   const brackets2 =["{", "}", "[", "]", "(", ")"];
//   br = br.split("").filter(e => brackets2.includes(e)).join("") */  // deleting everything without things brackets containing
  
//   /* br = br.split("").filter(e => e !== " ").join("") // deleting empty spaces */

//   while(true) {
//     if (br.includes("()","[]","{}") || br.includes("[]") || br.includes("{}")) {
//       br = br.split("()").join("")
//       br = br.split("[]").join("")
//       br = br.split("{}").join("")
//     }
//     else if (br === "") {
//       console.log(true); 
//       break
//     }
//     else {
//       console.log(false)
//       break;
//     } 
//   }
// }

// isVallid("()")
// isVallid("([]{[]})[]{{}()}")
// isVallid("([][]}")
// isVallid("[[]()")
// isVallid("[[]]())")
// isVallid("")
// isVallid("{   }")
// isVallid("()[.{}]")
// isVallid("{ [ ]   }")
// isVallid("...")






