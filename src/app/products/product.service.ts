import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

import { Category } from '../shared/enums';
import { Product } from '../shared/models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public seedProducts: Product[] = [
    {
      id: 1,
      name: 'Dr Nice',
      category: Category.First,
      description: 'Description1',
      isAvailable: true, price: 150,
      tags: ['tag1', 'tag2'],
      updatedDate: new Date('01 Jan 1970 00:00:00 GMT'),
      imageUrl: 'https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0'
    },
    {
      id: 2,
      name: 'Dr Pepper',
      category: Category.Second,
      description: 'Description2',
      isAvailable: true, price: 200,
      tags: ['tag2', 'tag3'],
      updatedDate: new Date('10 Jan 2020 10:22:00 GMT'),
      imageUrl: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/83D7/production/_111515733_gettyimages-1208779325.jpg'
    },
    {
      id: 3,
      name: 'Dr Strange',
      category: Category.Third,
      description: 'Description3',
      isAvailable: false,
      price: 300,
      tags: ['tag5', 'tag3'],
      updatedDate: new Date('22 Feb 2020 10:22:00 GMT'),
      imageUrl: 'https://www.sciencenewsforstudents.org/wp-content/uploads/2020/05/1030_LL_domestic_cats-1028x579.jpg'
    },
    {
      id: 4,
      name: 'Dr Empty',
      category: Category.Fourh,
      description: 'Description4',
      isAvailable: true,
      price: 250,
      tags: ['tag5', 'tag2'],
      updatedDate: new Date('14 Aug 2020 10:22:00 GMT'),
      imageUrl: 'https://www.paws.org/wp-content/uploads/2019/10/Alphie_cat_29864612_101115_profile_MB-2-1024x583.jpg'
    },
    {
      id: 5,
      name: 'Dr Dre',
      category: Category.Second,
      description: 'Description5',
      isAvailable: false,
      price: 250,
      tags: ['tag1', 'tag4'],
      updatedDate: new Date('17 Apr 2020 10:22:00 GMT'),
      imageUrl: 'https://post.greatist.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg'
    }
  ];

  constructor() { }

  public getItems(): Product[]  {
    const itemsJson = localStorage.getItem('productList');

    if (itemsJson == null){
      return this.seedProducts;
    }

    const result = JSON.parse(itemsJson);
    if (result == null){
      return [];
    }

    return result;
  }

  getProducts(): Observable<Product[]>  {
    return new Observable<Product[]> ((observer: Subscriber<Product[]> ) => {
      observer.next(this.getItems());
    });
  }

  getProduct(productId: number): Observable<Product>  {
    return new Observable<Product> ((observer: Subscriber<Product> ) => {
      this.getProducts().subscribe(products => observer.next(products.find(product => product.id === productId)));
    });
  }

  createProduct(product: Product): void{
    product.updatedDate = new Date();
    this.getProducts().subscribe(products => {
      product.id = products[products.length - 1].id + 1;
      products.push(product);
      localStorage.setItem('productList', JSON.stringify(products));
    });
  }

  deleteProduct(product: Product): void{
    product.updatedDate = new Date();
    this.getProducts().subscribe(products => {
      const index = products.findIndex(productInList => productInList.id === product.id);

      if (index > -1) {
        products.splice(index, 1);
      }

      localStorage.setItem('productList', JSON.stringify(products));
    });
  }

  updateProduct(product: Product): void{
    product.updatedDate = new Date();
    this.getProducts().subscribe(products => {
      const index = products.findIndex(productInList => productInList.id === product.id);

      if (index > -1) {
        products.splice(index, 1, product);
      }

      localStorage.setItem('productList', JSON.stringify(products));
    });
  }
}
