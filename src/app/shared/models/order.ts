import { CartItem } from '.';

export interface Order {
    id: string;
    customerName: string;
    address: string;
    cartItems: CartItem[];
    date: Date;
  }
