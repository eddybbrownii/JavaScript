function arrSum(arr) {
    let sum = 0;
    for (let i =0; i < arr.length; ++i) {
        // this is how you loop thru all items of array
        sum = sum +arr[i];
    }
    return sum;
    console.log('for loop broke')

}
console.log(arrSum([2, 2, 3]))