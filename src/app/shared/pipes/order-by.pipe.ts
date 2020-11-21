import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {

  transform(value: any[], property: string, descending?: boolean): any[] {
    console.log(value + property + descending);
    if (!value || !property) {
      return value;
    }

    if (value.length <= 1) {
      return value;
    }

    if (!descending){
      return value.sort((n1, n2) => this.compare(n1, n2, property));
    }
    else{
      return value.sort((n1, n2) => this.compareDescending(n1, n2, property));
    }
  }

  compare(firstValue: any, secondValue: any, property: string): number {
    if (firstValue[property] < secondValue[property] ){
      return -1;
    }
    else if (firstValue[property] > secondValue[property] ){
      return 1;
    }

    return 0;
  }

  compareDescending(firstValue: any, secondValue: any, property: string): number {
    if (firstValue[property] > secondValue[property] ){
      return -1;
    }
    else if (firstValue[property] < secondValue[property] ){
      return 1;
    }

    return 0;
  }

}
