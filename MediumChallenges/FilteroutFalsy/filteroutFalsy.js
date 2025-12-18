// array filter
function filterOutFalsy(arr) {
    return arr.filter(elem => !elem == true) // converts to a boolean
}
console.log(filterOutFalsy(['Banana', 'Apple', 'Orange', 'Apple']));

//for loop
function filterOutFalsy(arr) {
    let truthyArr = [];
    for (let i = 0; i < arr.length; ++i) {
        if (!!arr[i] === true) {
            truthyArr.push(arr[i]);
        }
    }
    return truthyArr;
}
console.log(filterOutFalsy([]));