export class Validator {
    static isEmptyString(stringLikeValue: string): void | never {
        if (stringLikeValue.length === 0) throw new Error('params must be string');
    }

    static isEmptyNumber(stringLikeValue: number): void | never {
        if (stringLikeValue < 0) throw new Error('number must be more than 0');
    }
}