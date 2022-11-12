function stringLength(string) {
    if(string.length < 1 || string.length > 10){
        return 'string length must be btn 1 and 10';
    }
    return string.length;
    }
// console.log(stringLength('balix'))
module.exports = stringLength;
