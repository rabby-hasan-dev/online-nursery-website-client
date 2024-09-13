export interface IProduct {
    _id: string;
    title: string;
    description: string;
    price: number;
    category: Category;
    brand: string;
    stock: number;
    rating: number;
    images: string;
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
  