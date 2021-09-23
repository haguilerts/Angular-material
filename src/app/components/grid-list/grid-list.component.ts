import { Component, OnInit } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss']
})
export class GridListComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'rows X cols: 1x3', cols: 3, rows: 1, color: 'yellow'},
    {text: '2x1', cols: 1, rows: 2, color: 'cyan'},
    {text: '1x1', cols: 1, rows: 1, color: 'darkorange'},
    {text: '1x2', cols: 2, rows: 1, color: 'lavender'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
