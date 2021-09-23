import { Component, OnInit } from '@angular/core';
interface col{
  color:string
}
@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {
  favoriteSeason: col;
  seasons = [{color:'Winter'},{color:'Spring'},{color:'Summer'},{color:'Autumn'}];
  centered = false;
  disabled = false;
  unbounded = false;

  constructor() { 
    this.favoriteSeason={color:''}
  }

  ngOnInit(): void {
  }

}
