// getMax([5, 100, 0]) -> 100
// getMax([12, 10,-20]) -> 12
// getMax([-300, -100, -200]) -> -100

function getMax(arr) {
    for (i = 0; i< arr.length; ++1) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(getMax([-300, -100, -200]));