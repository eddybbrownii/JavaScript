function sort(numbers) {
    return numbers.sort((a,b) => b.price - a.price);
     //Gets the property of the value 
}

console.log(
    sortHighToLow([
        {id: 1, price: 50 },
        {id: 2, price: 0 },
        {id: 3, price: 500 },
    ])
);