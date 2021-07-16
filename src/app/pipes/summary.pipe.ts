import { SlicePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
})
export class SummaryPipe implements PipeTransform {
  // ? --> optional
  transform(value: String, length?: number): unknown {
    if (!value) return null;
    let actualLength = length ? length : 20;
    return value.substring(0, actualLength) + '...';
  }
}
