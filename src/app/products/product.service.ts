import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
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
      tags: ['tag1', 'tag2'],
      updatedDate: new Date('01 Jan 1970 00:00:00 GMT')
    },
    {
      id: 2,
      name: 'Dr Pepper',
      category: Category.Second,
      description: 'Description2',
      isAvailable: true, price: 200,
      tags: ['tag2', 'tag3'],
      updatedDate: new Date('10 Jan 2020 10:22:00 GMT')
    },
    {
      id: 3,
      name: 'Dr Strange',
      category: Category.Third,
      description: 'Description3',
      isAvailable: false,
      price: 300,
      tags: ['tag5', 'tag3'],
      updatedDate: new Date('22 Feb 2020 10:22:00 GMT')
    },
    {
      id: 4,
      name: 'Dr Empty',
      category: Category.Fourh,
      description: 'Description4',
      isAvailable: true,
      price: 250,
      tags: ['tag5', 'tag2'],
      updatedDate: new Date('14 Aug 2020 10:22:00 GMT')
    },
    {
      id: 5,
      name: 'Dr Dre',
      category: Category.Second,
      description: 'Description5',
      isAvailable: false,
      price: 250,
      tags: ['tag1', 'tag4'],
      updatedDate: new Date('17 Apr 2020 10:22:00 GMT')
    }
  ];

  constructor() { }

  getProducts(): Observable<Product[]>  {
    return new Observable<Product[]> ((observer: Subscriber<Product[]> ) => {
      setInterval(() => observer.next(this.products), 500);
    });
  }
}
