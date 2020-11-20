import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor() { }

  public generate(length: number): string {
    return Math.random().toString(36).substr(2, length);
  }
}
