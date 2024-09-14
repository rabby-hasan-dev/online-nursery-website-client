export interface IProduct {
    _id: string;
    title: string;
    description: string;
    price: number;
    category: Category;
    quantity: number;
    rating: number;
    image: string;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface Category {
    productStock: number;
    _id: string;
    name: string;
    image:string;
    description: string;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
  }
  