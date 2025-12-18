// Repeats until told to stop
let count = 1
console.log(count)
count = count + 1

// for loop
// while loop
// do while loop

// while (count <= 100)
//     console.log(count)
// { count = count + 1;

// }

// for (let i = 0; i < 3; i++ ) {
//     console.log(i + 1);
// }

for ( let i = 1; i < 20; i++) {
    console.log(i)
if (i%3 === 0 && i%5 === 0){
    console.log(`${i} -> Frontend Simplified`)
    
}
else if (i%3) {
    console.log(`${i} -> Simplified` )
}
else if (i%5) {
    console.log(`${i} -> Frontend`)
}
else {
    console.log(`${i} ->  ${i}`)
}
}
