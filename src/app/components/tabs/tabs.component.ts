import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
export interface ExampleTab {
  label: string;
  content: string;
}
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  asyncTabs: Observable<ExampleTab[]>;
  time:number=10000
  icon:string[]=['home','account_circle','shopping_cart']
  constructor() {
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'Dragon ball Super', content: 'https://as.com/meristation/imagenes/2020/01/15/noticias/1579084668_612285_1579085061_noticia_normal.jpg',},
          {label: 'Dragon ball Z', content: 'https://www.wallpapertip.com/wmimgs/12-128766_user-uploaded-image-dragon-ball-z-kai-wallpaper.jpg'},
          {label: 'Dragon ball hero', content: 'https://laverdadnoticias.com/__export/1594676990295/sites/laverdad/img/2020/07/13/dragon_ball_z_personajes.jpg_1902800913.jpg'},
        ]);
      }, this.time);
    });
  }
  ngOnInit(): void {
    setInterval(()=>{                      
    this.time=this.time-1000  
    }, 1000);
  }
  //---------------------------------------------------
  tabs = ['First', 'Second', 'Third'];
  selected = new FormControl(0);

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New');

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
//----------------------------------------------------------
tabLoadTimes: Date[] = [];

  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }
}
