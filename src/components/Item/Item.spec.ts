import { Item } from './Item';
import { update } from 'lodash';

describe('Item should:', () => {
    const apple = new Item('apple', 'fruit', 2)

    test('show apple', () => {
        expect(apple.show()).toEqual(
            `
            Produkt: ${apple.name},
            Kategoria: ${apple.category},
            Cena: ${apple.price.toFixed(2)} PLN,
            Rabat: ${apple.discount} %,
            Ilość: ${apple.quantity} sztuk,
            ID produktu: ${apple.uuid}
            `)
    })

    test('update name apple', () => {
        apple.update('name', 'superApple');
        expect(apple.name).toEqual('superApple');
    });

    test('update category apple', () => {
        apple.update('category', 'superFruit');
        expect(apple.category).toEqual('superFruit');
    });

    test('update price apple', () => {
        apple.update('price', 4.30);
        expect(apple.price).toEqual(4.30);
    });

    test('update discount apple', () => {
        apple.update('discount', 2.00);
        expect(apple.discount).toEqual(2.00);
    });

    test('update quantity apple', () => {
        apple.update('quantity', 4.00);
        expect(apple.quantity).toEqual(4.00);
    });

    test('apple show after updates', () => {
        apple.update('name', 'superApple');
        apple.update('category', 'superFruit');
        apple.update('price', 4.30);
        apple.update('discount', 2.00);
        apple.update('quantity', 4.00);

        expect(apple.show()).toEqual(
            `
            Produkt: ${apple.name},
            Kategoria: ${apple.category},
            Cena: ${(apple.price * (1 - (apple.discount / 100))).toFixed(2)} PLN,
            Rabat: ${apple.discount} %,
            Ilość: ${apple.quantity} sztuk,
            ID produktu: ${apple.uuid}
            `)
    });
});

describe('Item should throw Error', () => {
    const orange = new Item('orange', 'fruit', 3.00);

    test('invalid value to correct key, expected Error("is wrong argument")', () => {
        expect(() => expect(orange.update('name', 3))).toThrowError('is wrong argument');
        expect(() => expect(orange.update('category', 5))).toThrowError('is wrong argument');
        expect(() => expect(orange.update('price', 'superOrange'))).toThrowError('is wrong argument');
        expect(() => expect(orange.update('discount', 'superDiscount'))).toThrowError('is wrong argument');
        expect(() => expect(orange.update('quantity', 'superQuantity'))).toThrowError('is wrong argument');
    });
});