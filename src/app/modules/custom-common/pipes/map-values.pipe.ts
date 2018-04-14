import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapValues'
})
export class MapValuesPipe implements PipeTransform {

  transform(value: any): any {
    let dataArr = [];
    Object.keys(value).forEach((key: any) => {
      dataArr.push({ key: key, value: value[key] });
    });
    return dataArr;
  }

}
