import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  public app: string;
  public ver: string;
  public url: string;
}

export const v1Constants = {
  app: 'TaskManager',
  ver: '1.0',
  url: 'http://localhost:4200/'
} as ConstantsService;
