import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
export interface Transaction {
  item: string;
  cost: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-example-table-one',
  templateUrl: './example-table-one.component.html',
  styleUrls: ['./example-table-one.component.scss']
})
export class ExampleTableOneComponent implements OnInit {
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
  dataSource:any = ELEMENT_DATA;

  displayedColumns1: string[] = ['name', 'weight', 'symbol', 'position'];
  columnsToDisplay: string[] = this.displayedColumns1.slice();
  data: PeriodicElement[] = ELEMENT_DATA;
  

  constructor() { }

 
  addColumn() {
    const randomColumn = Math.floor(Math.random() * this.displayedColumns1.length);
    this.columnsToDisplay.push(this.displayedColumns1[randomColumn]);
  }

  removeColumn() {
    if (this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }
  }

  shuffle() {
    let currentIndex = this.columnsToDisplay.length;
    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Swap
      let temp = this.columnsToDisplay[currentIndex];
      this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
      this.columnsToDisplay[randomIndex] = temp;
    }
  }
  
  applyFilter(event: Event) {
    //this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
//-------------------------------------
  displayedColumns2: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  dataSource2 = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
 isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource2.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource2.data);
  }
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
//-------------------------------------
  
  displayedColumns3 =['name', 'position', 'weight', 'symbol', 'position', 'weight', 'symbol', 'star'];
  dataSource3 = ELEMENT_DATA;
//--------------------------------------

  displayedColumns4: string[] = [];
  dataSource4 = ELEMENT_DATA;

  tables = [0]; 
  ngOnInit(): void {
    this.displayedColumns4.length = 24;
    this.displayedColumns4.fill('filler');

    // The first two columns should be position and name; the last two columns: weight, symbol
    this.displayedColumns4[0] = 'position';
    this.displayedColumns4[1] = 'name';
    this.displayedColumns4[22] = 'weight';
    this.displayedColumns4[23] = 'symbol';
  }
  isSticky(buttonToggleGroup: MatButtonToggleGroup, id: string) {
    return (buttonToggleGroup.value || []).indexOf(id) !== -1;
  }
  //************************************* 

  displayedColumns5 = ['item', 'cost'];
  transactions: Transaction[] = [
    {item: 'Beach ball', cost: 4},
    {item: 'Towel', cost: 5},
    {item: 'Frisbee', cost: 2},
    {item: 'Sunscreen', cost: 4},
    {item: 'Cooler', cost: 25},
    {item: 'Swim suit', cost: 15},
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
}
