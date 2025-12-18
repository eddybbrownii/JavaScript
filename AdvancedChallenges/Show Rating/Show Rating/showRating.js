function showRating(rating) {
    let ratings = "";
    for (let i= 1; i<= Math.floor(rating); ++i) {
        ratings += "*";
        if (i !== Math.floor(rating) - 1) {
            ratings += "";
        }
    }
    if (!Number.isInteger(rating)) {
        ratings += ('.');
    }
        return ratings;
    } 
console.log(showRating(4.5));
//Math.floor rounds down to whole #
//initialise an empty string
// loop through the rounded down rating