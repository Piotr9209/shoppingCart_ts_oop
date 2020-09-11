import { withUuid } from "./withUuid";
import { availableKeys } from "../type/availableKeys";


export interface IItem extends withUuid {
    name: string;
    category: string;
    price: number;
    discount: number;
    quantity: number
    update(key: availableKeys, value: string | number): void;
    show(): string;
};