import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ripples',
  templateUrl: './ripples.component.html',
  styleUrls: ['./ripples.component.scss']
})
export class RipplesComponent implements OnInit {
  centered = false;
  disabled = false;
  unbounded = false;

  radius: number=0;
  color: string='';

  //
  myColor:string=''
  constructor() { }

  ngOnInit(): void {
  }

}
