// Obiekt charakteryzujący koszyk:
//     Ma mieć: listę wybranych przedmiotów, rabat % na koszyk, kod rabatowy
// Ma umożliwiać: dodawanie / usuwanie przedmiotów do /z koszyka, podliczać cene, podliczać ilośc
//     brac pod uwagę rabat oraz kod rabatowy jeśli istnieje(ma istnieć)

// Obiekt charakteryzujący przedmiot:
//     Ma miec: Nazwę, Kategorię, Cenę, Rabat % na przedmiot, id
// Ma umożliwiać: Tworzenie obiektu, wyświetlac o nim informacji(w odpowiedniej formie),
//     modyfikować cenę przedmiotu, określać jego rabat %

import {
    v4 as uuidv4
} from 'uuid';
import { Item } from '../Item/Item'
import { IItem } from '../../interface/IItem';
import { IShoppingCart } from '../../interface/IShoppingCart';



export class ShoppingCart implements IShoppingCart {
    uuid: string;
    listItem: Array<IItem>;

    constructor() {
        this.uuid = uuidv4();
        this.listItem = [];
    }

    addProducts(...arrayOfItems: Array<IItem>): void {
        arrayOfItems.forEach(item => {
            const currentItem = this.listItem.findIndex(listItem => listItem.name == item.name);
            if (currentItem >= 0)
                this.listItem[currentItem].quantity += item.quantity;
            else
                this.listItem.push(Object.assign({}, item));
        })
    }


    deleteProduct(item: IItem): void {
        const doesNotExistInItem = !this.listItem.find(itemFind => itemFind.uuid === item.uuid);
        if (doesNotExistInItem) throw new Error(`item is not in array`)
        this.listItem = this.listItem.filter(itemToRemove => itemToRemove.uuid !== item.uuid);
        // ALTERNATIVE:
        // this.listProduct = this.listProduct.reduce((acc, el, index) => {
        //     if (!el.uuid === uuid) {
        //         acc.push(el)
        //     }
        //     return acc;
        // }, []);

    }

    sumAllProducts(discountCart: number = 0): object {
        let card = this.listItem.reduce((acc, cur) => {
            acc.price += cur.price;
            acc.quantity += cur.quantity;
            return acc
        }, {
            price: 0,
            quantity: 0
        });
        card.price -= discountCart > 0 ? (card.price * discountCart) / 100 : 0;
        return card;
    }
}






const product1 = new Item('jablko', 'owoce', 15, 0, 2);
const product2 = new Item('gruszka', 'owoce', 10, 0, 2)
const product3 = new Item('mandarynka', 'owoce', 5, 0, 1)
const product4 = new Item('winogrono', 'owoce', 17, 0, 4);


const cart = new ShoppingCart();
cart.addProducts(product1, product2, product3, product4);
cart.addProducts(product1, product2, product3, product4);
cart.deleteProduct(product3)
console.log(cart);