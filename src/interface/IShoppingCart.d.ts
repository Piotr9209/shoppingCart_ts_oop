import { withUuid } from "./withUuid";
import { IItem } from "./IItem";

export interface IShoppingCart extends withUuid {
    listItem: Array<IItem>
    addProducts(...arrayOfItems: Array<IItem>): void;
    deleteProduct(item: IItem): void;
    sumAllProducts(discountCart: number): object; // okreslony interfejs
}

