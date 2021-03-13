import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  
  transform(value: any, filterString: string, propName: string) {

    if (value.length === 0) {
      return value;
    }

    const resultArray = [];

    for (const item of value) {
      if (item[propName].includes(filterString) || filterString === '') {
        resultArray.push(item);
      }
    }

    return resultArray;
  }
}
