import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insignia',
  templateUrl: './insignia.component.html',
  styleUrls: ['./insignia.component.scss']
})
export class InsigniaComponent implements OnInit {

  hidden:boolean = false ;
  constructor(){
   
  }
  ngOnInit() {
    
  }


  toggleBadgeVisibility () {
     this.hidden =! this.hidden;
  }
}
