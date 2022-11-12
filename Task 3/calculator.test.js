const calculator = require('./calculator');
const cal = require('./calculator');
describe('Test for arithmetic operators on two numbers',()=>{
    test('Add two numbers,num1 and num2', () => {
        const num1 = 1,num2 = 5;
        const addition = new calculator(num1,num2)
        expect(addition.add()).toBe(6);
    });

    test('Subtract two numbers,num1 and num2', ()=>{
        const num1 = 1, num2 = 5;
        const subtract = new calculator(num1, num2);
        expect(subtract.subtract()).toBe(-4)
    });
}) 

