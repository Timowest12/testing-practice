function stringlength(string){
     if (string.length === 1 || string.length > 10) {
       console.log('not between 1 and 10')
    } 
    return string.length
}
function stringReverse(string){
     str = string.split('').reverse().join('');
     return str;
}
const calculator = {
    add:(a,b) => a+b,
    subtract:(a,b) => a-b,
    divide:(a,b) => a/b,
    multiply:(a,b) => a*b,
}
function capitalize(string){
    return string.toUpperCase()
}
exports.stringlength = stringlength;
exports.stringReverse = stringReverse;
exports.calculator = calculator;
exports.capitalize = capitalize;