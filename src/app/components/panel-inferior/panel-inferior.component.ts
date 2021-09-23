import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
@Component({
  selector: 'app-panel-inferior',
  templateUrl: './panel-inferior.component.html',
  styleUrls: ['./panel-inferior.component.scss']
})
export class PanelInferiorComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) {

  }
 openLink(event: MouseEvent): void {
  
    event.preventDefault();
  }
 

  ngOnInit(): void {
  }

}

