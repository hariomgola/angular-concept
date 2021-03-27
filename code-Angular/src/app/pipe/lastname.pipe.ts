import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastname'
})
export class LastnamePipe implements PipeTransform {

  transform(value: any): unknown {
    // let _temp = value.toString(); //code me
    // let data = _temp.split(" ");
    // console.log(data);
    // return data[data.length-1];
    let currentyear = new Date().getFullYear();
    let birthYear = new Date(value).getFullYear();
    console.log(currentyear,birthYear)
    return (currentyear-birthYear)
  }

}
