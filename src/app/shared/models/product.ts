import { Category } from '../enums/category';

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: Category;
    isAvailable: boolean;
    tags: string[];
    updatedDate: Date;
  }
