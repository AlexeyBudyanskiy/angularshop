import { Injectable } from '@angular/core';
import { Category } from '../shared/enums/category';
import { Product } from '../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public products: Product[] = [
    {
      id: 1,
      name: 'Dr Nice',
      category: Category.First,
      description: 'Description1',
      isAvailable: true, price: 150,
      tags: ['tag1', 'tag2']
    },
    {
      id: 2,
      name: 'Dr Pepper',
      category: Category.Second,
      description: 'Description2',
      isAvailable: true, price: 200,
      tags: ['tag2', 'tag3']
    },
    {
      id: 3,
      name: 'Dr Strange',
      category: Category.Third,
      description: 'Description3',
      isAvailable: false,
      price: 300,
      tags: ['tag5', 'tag3']
    },
    {
      id: 4,
      name: 'Dr Empty',
      category: Category.Fourh,
      description: 'Description4',
      isAvailable: true,
      price: 250,
      tags: ['tag5', 'tag2']
    },
    {
      id: 5,
      name: 'Dr Dre',
      category: Category.Second,
      description: 'Description5',
      isAvailable: false,
      price: 250,
      tags: ['tag1', 'tag4'] }
  ];

  constructor() { }

  getProducts(): Product[]  {
    return this.products;
  }
}
