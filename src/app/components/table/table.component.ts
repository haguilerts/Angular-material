import { Component, OnInit,AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string,
  imagen:string,
  position: number,
  weight: number,
  symbol: string,
}
const Imagen:string[]=[
  'https://laverdadnoticias.com/__export/1610221860938/sites/laverdad/img/2021/01/09/goku_dragon_ball_super.jpg_514966513.jpg',
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWliNBiZsRoQttQdnGMIoXj8r_0lD2UrhCbWFzT0FQjyWoJy0sLD-QGp9uWkUUe2OeUCI&usqp=CAU',
  'https://www.nacionflix.com/__export/1609995864984/sites/debate/img/2021/01/06/los_animes_mxs_vistos_en_crunchyroll_en_lo_que_va_del_2021.jpg_242310155.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcqU_YlEfCiMY1eElFTs-24PCXCt2CtojeDA&usqp=CAU',
      'https://finde.latercera.com/wp-content/uploads/2021/06/Record-of-Ragnarok-9-700x450.jpg',
    'https://areajugones.sport.es/wp-content/uploads/2020/10/anime-de-Poke%CC%81mon-Hoenn-Aura-Max-Ash-Brock-1080x609.jpg',
   'http://archive.org/services/img/stream.2021-07-18.170622',
   'https://esporters.today/__export/1630169763295/sites/gammers/img/2021/08/28/naruto.jpg_356461293.jpg',
  'https://img.vixdata.io/pd/jpg-large/es/sites/default/files/t/tonikaku_kawai_anime.jpg',
  'https://spoiler.bolavip.com/export/sites/bolavip/img/2021/01/10/one_piece_mejor_manga_del_2020.jpg_1026485750.jpg',
]

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, imagen:Imagen[0] ,  name: 'Dragon Ball Supe', weight: 1.0079, symbol: 'DGS'},
  {position: 2, imagen:Imagen[1], name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, imagen:Imagen[2],  name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, imagen:Imagen[3],  name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, imagen:Imagen[4],  name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, imagen:Imagen[5],  name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, imagen:Imagen[6],  name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, imagen:Imagen[7],  name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, imagen:Imagen[8],  name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, imagen:Imagen[9],  name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position','imagen', 'name', 'weight', 'symbol'];
  displayedColumnsData: string[] = ['position','name',  'weight'];
  dataSource =  new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort=new MatSort();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef?.prototype);

  constructor() {}
  
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    console.log('img: '+Imagen[1])
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  logData(row:any) {
    console.log(row);
   
  }

  applyFilter(filterValue: any) {
    console.log('filterValue.target.value: ' +filterValue.target.value)
    this.dataSource.filter = filterValue.target.value.trim().toLowerCase();
  }

}
