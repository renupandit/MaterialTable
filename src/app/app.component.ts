import { Component, ViewChild } from '@angular/core';
import { Item, ItemStatus } from './model';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {FormBuilder, AbstractControl, FormControl} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="Table with filter and sorting"
  searchText = '';


  public data: Item[] = [
    {
      id: '1',
      name: 'Get Dog Food',
      status: ItemStatus.Todo,
    },
    {
      id: '2',
      name: 'Fetch Water',
      status: ItemStatus.Todo,
    },
    {
      id: '3',
      name: 'Go On a Walk',
      status: ItemStatus.Complete,
    },
    {
      id: '4',
      name: 'Cook Dinner',
      status: ItemStatus.Todo,
    },
    {
      id: '5',
      name: 'Watch a Movie',
      status: ItemStatus.InProgress,
    },
    {
      id: '6',
      name: 'Till the Field',
      status: ItemStatus.Complete,
    },
    {
      id: '7',
      name: 'Plant Crops',
      status: ItemStatus.Complete,
    },
    {
      id: '8',
      name: 'Harvest Crops',
      status: ItemStatus.InProgress,
    },
  ];

  status = new FormControl('');
  displayedColumns: string[] = ['id', 'name', 'status'];
  dataSource = new MatTableDataSource(this.data);
  @ViewChild(MatSort)
  sort!: MatSort;
  
  filteredValues = {
    name: '',
  };


  constructor() {
    this.dataSource.data = this.data;
    this.dataSource.filterPredicate = this.createFilter();
  }

  ngOnInit() {
    this.status.valueChanges
      .subscribe(
        status => {
          this.filteredValues.name = status;
          this.dataSource.filter = JSON.stringify(this.filteredValues);
        }
      )
  }

  filterOnName(){
    let tmp=this.data;
    if(this.searchText ===''){
      this.dataSource=new MatTableDataSource(this.data);
    }
    else
    this.dataSource=new MatTableDataSource( tmp.filter((e)=>e.name===this.searchText));
  }
  

  createFilter(): (data: any, filter: string) => boolean {
      let filterFunction = function(data:any, filter:any): boolean {
        return data.status === filter
      }
      return filterFunction;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
  }

  

}
