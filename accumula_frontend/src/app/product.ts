export interface Product {
    id: number;
    name: string;
}

export interface ProductDetail {
    inventoryQuantity: number,
    maxBusinessDaysToShip: number,
    productId: number,
    productName: string,
    shipOnWeekends: boolean,
    shipping_date: string
}