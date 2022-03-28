import { Pipe, PipeTransform } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Item } from './model';

 
@Pipe({ name: 'searchByName' })
export class SearchByNamePipe implements PipeTransform {
  transform(item: Item[], searchText: string) {
    return new MatTableDataSource<any>(item.filter((e)=>e.name===searchText ))
  }
}