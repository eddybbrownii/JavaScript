// Data structure that can hold multiple data values in one variable

// let item1 = 20
// let item2 = 30
// let item3 = 40
// let item4 = 50
// let item5 = 100
//JavaScript executes line by line
let arr =[ 20, 30, 40, 50, 100]
//first element
console.log(arr[0])
//last element
console.log(arr[arr.length -1])
//add element
arr.push(200)
console.log(arr);
// //filtering 
// let newArr = arr.filter((element)=> {
//     console.log(element)
//     if(element < 50) {
//     return true
//     }
// })
// console.log(newArr)
// shorter way to write it
let newArr = arr.filter(element=> element < 50
    
    
)
console.log(newArr)

let grades = ['A+' , 'A', 'FAIL']
let goodGrades = []

// let goodGrades = grades.filter(element => element !== 'FAIL')
// console.log(goodGrades)

// Create a new empty array called goodGrades
for (i = 0; i < grades.length; i++) {
    if (grades[i] !== 'FAIL') {
        goodGrades.push(grades[i]);
    }}
    // add the current element onto 'goodGrades' only if
    // the current element is not equal to 'FAIL'
    console.log(grades[i]);
    console.log(goodGrades);
    // console.log(goodGrades)

    let newArray = [1, 4, 9, 16]
    let newArray2 = newArray.map((element) =>  'dog')
    console.log(newArray2);

    let dollars = [1, 5, 10, 3];

    // let cents = dollars.map(element => element * 100)
    // console.log(cents)
//if you can't use map
let cents = []
for (let i= 0; i < dollars.length; i++) {
    cents.push(dollars[i] * 100);
}
console.log(cents);
//Brute Force way


