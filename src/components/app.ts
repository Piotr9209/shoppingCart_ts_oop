import { Item } from './Item'
import { ShoppingCart } from './ShoppingCart'


const product1 = new Item('jablko', 'owoce', 15, 0, 2);
const product2 = new Item('gruszka', 'owoce', 10, 0, 2)
const product3 = new Item('mandarynka', 'owoce', 5, 0, 1)
const product4 = new Item('winogrono', 'owoce', 17, 0, 4);


const cart = new ShoppingCart();
cart.addProducts(product1, product2, product3, product4);
cart.addProducts(product1, product2, product3, product4);
