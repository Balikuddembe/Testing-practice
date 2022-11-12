const stringLength = require('./string');
test('should return the number of characters in a string', () => {
    expect(stringLength('balix')).toBe(5);
});
    test('case if string length is greater than 10', ()=>{
        expect(stringLength('balixemhhh')).toBe(10);
    });

    test('case if string lenght is below 1', ()=>{
        expect(stringLength('')).toMatch('');
    });