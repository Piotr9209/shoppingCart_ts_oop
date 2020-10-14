import { Validator } from './Validator';


describe('Validator should throw error if:', () => {

    test('add empty string as argument in method isEmptyString, expected Error("params must be string")', () => {
        expect(() => Validator.isEmptyString('')).toThrowError('params must be string');
    })

    test('add negative number as argument in method isEmptyNumber, expected Error ("number must be more than 0")', () => {
        expect(() => Validator.isEmptyNumber(-1)).toThrowError('number must be more than 0');
    })
});