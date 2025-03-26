import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
})
export class SummaryPipe implements PipeTransform {
  transform(str: string, lim: number = 50) {
    return `${str.substring(0, lim)}...`;
  }
}
