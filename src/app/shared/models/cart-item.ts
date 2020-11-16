import { Product } from './product';

export interface CartItem {
    product: Product; // может быть просто расширить интерфейс Product? тогда не будет еще одного уровня вложености
    quantity: number;
  }
