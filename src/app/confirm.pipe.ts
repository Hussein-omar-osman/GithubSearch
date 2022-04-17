import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'confirmName',
})
export class ConfirmPipe implements PipeTransform {
  transform(value) {
    if ((value = '')) {
      return (value = 'name not found');
    } else {
      return value;
    }
  }
}
