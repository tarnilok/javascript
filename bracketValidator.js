
const isVallid  =  (br) => {
    
    const brackets = {
        "(" : ")",
        "[" : "]",
        "{" : "}"
    };
    const openersBrackets = ["(", "[", "{"];
    const arr = [];

    br.split("").map(e => {
        if (openersBrackets.includes(e)) {
            arr.push(e)
            // console.log(e)
        }
        else if (e == brackets[arr[(arr.length)-1]]) {         //empty array and object are true 
            console.log(arr)
            arr.pop()
        }
        else {return false}
    });
    // console.log(arr)
    return arr.length == 0
}

console.log(isVallid(" "))

// const a = "a n k a r a"
// a.split(" ").forEach(element => {
//     if (a.includes("k")) console.log("hello") 
// });

// console.log(a.split(""))

// const a = []
// a[-1] ? console.log("hello") : console.log("goodbye")
// a.pop()
// console.log(a)
// console.log(a[a.length-1])

// const brackets2 = {
//     "(" : ")",
//     "[" : "]",
//     "{" : "}"
// };

// console.log("(" == brackets2[undefined])

// const a = () => {
//     return [] == []
// }

// console.log(a())

// var brackets = {
//     "(" : ")",
//     "[" : "]",
//     "{" : "}"
// };

//  const arr = ["[", "{", "("]

//  console.log(brackets[arr[(arr.length)-1]])

// console.log("{[]{()}}".split(""))

// const a = [].length
// console.log(Boolean(a))
