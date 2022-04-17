import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkBio',
})
export class CheckBioPipe implements PipeTransform {
  transform(value: string) {
    if (value == '') {
      value = 'I am a Github user';
    }
  }
}
