function sortLowestToHighest(numbers) {
    return numbers.sort((a,b) =>  a-b);
}
console.log(sortLowestToHighest([1, 5, 0, 10, 100008, 200, 2]));