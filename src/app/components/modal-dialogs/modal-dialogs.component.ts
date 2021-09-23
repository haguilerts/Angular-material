import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog,  MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalsComponent } from './modals/modals.component';

@Component({
  selector: 'app-modal-dialogs',
  templateUrl: './modal-dialogs.component.html',
  styleUrls: ['./modal-dialogs.component.scss']
})
export class ModalDialogsComponent implements OnInit {
  surname: string;
  name: string;
  edad:string
  constructor(public dialog: MatDialog) {
    this.surname='';
    this.name='';
    this.edad=''
  }
  ngOnInit(): void {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalsComponent, {
      height: 'auto',
      width: '600px',
      data: {name: this.name, surname: this.surname}
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('res: ',result); // treu: || undefols
      this.edad = result.edad;
    });    
    //dialogRef.close('Pizza!');
  }

}

