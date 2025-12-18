// let beginCash = 50;
// let price = 40;
// let isStoreOpen = true;

// if (cash >= price && isStoreOpen ) /* use !isStoreOpen to get Opp answer  */ {
//     console.log('print the receipt') /* truthy value*/
// }
// else if(cash === price) {
//     console.log("you paid the exact amount") /* false value*/
// }
// else    {
//     console.log('Not enough money you still owe' + (difference * -1) + 'dollars')
// }

// == equals values 
// === equals values and types 
// != not equals
// !== not equal value and type
// > greater than
// < less than
// >= greater or equal 
// <= less than or equal to
// && 
//     true && true -> true
//     true && false -> false
//     false && true -> false
//     false && false -> true 

// Ternary Operators

// isObese ? 'unhealthy' 'healthy'
//             true        false

// let subscribed = true
// let loggedIn = true

// let str = subscribed || loggedIn ? 'show the video' : 'hide the video'
// console.log(str);

let cash = 50;
let price = 40;
let isStoreOpen = true;

let str = cash >= price && isStoreOpen ? "give receipt" : "don't give receipt"
console.log(str);