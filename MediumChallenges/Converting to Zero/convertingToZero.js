//way 1
function convertingToZero(arr) {
    let newArr = [];
    for (let i=0; i<arr.length; ++1) {
        arr[i] = 0
    }
    return newArr;

}
console.log(convertingToZero(1, 2, 3, 4, 5, 6));

//way 2 arr.fill
function convertingToZero(arr) {
    return newArr(5).fill(0);

}
console.log(convertingToZero(1, 2, 3, 4, 5, 6));

// way array.map
function convertingToZero(arr) {
    return arr.map[elem => 0];

}
console.log(convertingToZero(1, 2, 3, 4, 5, 6));