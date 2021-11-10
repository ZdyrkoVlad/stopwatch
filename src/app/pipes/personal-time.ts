import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'PersonalTimePipes'
})
export class PersonalTime implements PipeTransform {
  constructor() {
  }

  transform(Time: number): string {


    // let Data = new Date(Number(Number(value) * 1000));
    // let Time = new Date(Number(Number(value) * 1000)).toLocaleTimeString('gregory');

    const timeM = new Date(Time * 1000).toISOString().substr(11, 8)
    const stringTime: string = timeM.toString();

    return stringTime;
  }
}
