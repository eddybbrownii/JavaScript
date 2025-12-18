function progressiveSum(num) {
    let sum = 0;
    for (let i =0; i < num; ++i) {
        sum = sum + 1;
    }
    return sum;
}
console.log(progressiveSum(3));