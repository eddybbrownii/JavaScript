// reverseString('abc') -> 'cba'
// reverseString('David') -> 'divaD'
// reverseString('This is cool') -> 'looc si siht'

//way 1
function reverseString(string) {
    let reverseString = '';
    for (let i= 0; i < str.length; ++i) {
        reverseString = str[i] + reverseString;
    }

}
console.log(reverseString());
// way 2
function reverseString(string) {  
      let reverseString = '';
    for (let i= str.length-1; i >= 0; -1){
        reverseString += str[i]
    }
return reverseString;
}
console.log(reverseString());

//way 3 reverse array property
// 'abc'.split('')
// [3] ['a','b','c']
// 'abc'.split('').reverse()
//'abc'.split('').reverse().join('')

function reverseString(string) {
    return str.split('').reverse().join('');
}
console.log(reverseString());