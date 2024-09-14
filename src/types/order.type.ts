import { IProduct } from "./prduct.type";

export interface AddToCart {
    _id: string;
    userId?: string;
    productId: string |undefined;
    quantity: number;
}

export interface CreateOrderPayload {
    userId?: string;
    productId: string;
    quantity: number;
}

export interface UpdateOrderPayload {
    quantity?: number;
    totalPrice?: number;
    isCanceled?: boolean;
}


export interface IOrders {
    _id: string;
    userId: string;
    productId: IProduct;
    quantity: number;
    totalPrice: number;
    isCanceled: boolean;
    customerName: string;
    customerPhone: string;
    customerAddress: string;
    createdAt: string;
    updatedAt: string;
  }
  
