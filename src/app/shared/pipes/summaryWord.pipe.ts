import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summaryWords',
})
export class summaryWordsPipe implements PipeTransform {
  transform(str: string, lim: number = 20) {
    return `${str.split(' ').slice(0, lim).join(' ')}...`;
  }
}
