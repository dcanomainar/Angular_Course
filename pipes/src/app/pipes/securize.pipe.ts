import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'securize'
})
export class SecurizePipe implements PipeTransform {

  transform(value: string, securize: boolean = true): string {
    return (securize) ? '*'.repeat(value.length) : value;
  }
}
