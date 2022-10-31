import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/brand';

@Pipe({
  name: 'brandfilter',
})
export class BrandfilterPipe implements PipeTransform {
  transform(items: Brand[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    searchText = searchText.toLocaleLowerCase();
    const filterd = items.filter((item) =>
      item.name.toLocaleLowerCase().startsWith(searchText)
    );
    if (filterd.length > 0) {
      return filterd;
    }
    return [];
  }
}
