import { Pipe, PipeTransform } from '@angular/core';
import { Iplayer } from '../models/player';

@Pipe({
  name: 'playerFilter',
})
export class PlayerFilterPipe implements PipeTransform {
  transform(
    arr: Array<Iplayer>,
    searchVal: string,
    selectedField: string
  ): Array<Iplayer> {
    if (!searchVal || !selectedField) {
      return arr;
    }
    if (!arr) {
      return [];
    }

    let filteredArr = arr.filter((p) => {
      if (typeof searchVal === 'string') {
        return Object(p)[selectedField].toString().toLowerCase().includes(searchVal.toLowerCase());
      }
    });
    return filteredArr;
  }
}
