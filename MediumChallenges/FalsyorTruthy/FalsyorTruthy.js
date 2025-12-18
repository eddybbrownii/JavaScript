// filterOutFalsy(0, 500) -> 0
// filterOutFalsy(false, 100) -> false
// filterOutFalsy([true, 'Dog']) -> 'Dog'

function filterOutFalsy(element1, element2) {
    
    return (!element1) ? element1 : element2;
}
console.log(filterOutFalsy(null, 5));