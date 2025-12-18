// for loop
function filterOutApples(arr) {
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] !== 'Apple') {
            noApples.push(arr[i]);
        }
    }
    return noApples;

}
console.log(filterOutApples(['Banana', 'Apple', 'Orange', 'Apple']));

// array filter
function filterOutApples(arr) {
    return arr.filter(elem => elem == 'Apple')
}
console.log(filterOutApples(['Banana', 'Apple', 'Orange', 'Apple']));