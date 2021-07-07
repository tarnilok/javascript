/* Write a function which finds all the repeated strings in the base string
If there is no matching, the function warns the user about it. 
No Regex will be used.
*/

// Solution ==>

// function finder (str, searched) {
//     if (str.indexOf(searched) === -1) console.log(`"${searched}" --> Sorry, no matching`); 
//     let fromIndex = 0;
//     while (str.indexOf(searched, fromIndex) !== -1) {
//         let  i = str.indexOf(searched, fromIndex);
//         console.log(`"${searched}" starts at ${i}. index`);
//         fromIndex = i + searched.length
//     }
// }
// let sentence = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
// let wanted = prompt("what are you searching?").trim();
// finder(sentence, wanted);

// Solution ==> 2

// function finder2 (str, searched) {
//     let list = [];
//     for (let fromIndex = 0; i = str.indexOf(searched, fromIndex) !== -1; fromIndex = i + searched.length) {
//         i = str.indexOf(searched, fromIndex)
//         list.push(i); 
//     }
//     return list;
// }
// let sentence = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
// let wanted = prompt("what are you searching?").trim();
// console.log(finder2(sentence, wanted));