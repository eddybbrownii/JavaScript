// calculateTheTime(66) -> '01:06'
// calculateTheTime(50) -> '00:50'
// calculateTheTime(200) -> '05:00'

function calculateTheTime(seconds) {
    let timeMinutes = Math.floor(seconds / 60);
    let timeSeconds = seconds % 60;

    if (timeMinutes.toString().length === 1) {
        timeMinutes = "0" + timeMinutes
    }

    return  + timeMinutes + ':' + timeSeconds;
}
console.log(calculateTheTime(70));