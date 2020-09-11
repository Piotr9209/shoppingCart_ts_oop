export class Validator {
    static isEmptyString(stringLikeValue: string): void {
        if (stringLikeValue.length === 0) throw new Error('params must be string');
    }

    static isEmptyNumber(stringLikeValue: number): void {
        if (stringLikeValue < 0) throw new Error('discount must be more than 0');
    }
}