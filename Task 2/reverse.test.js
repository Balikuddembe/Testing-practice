const reverseString = require('./reverse');

test('should reverse the string', () => {

    expect(reverseString('bakix')).toBe('xikab');
})