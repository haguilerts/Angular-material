import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar,MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition, MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-mostrar-notificacion',
  templateUrl: './mostrar-notificacion.component.html',
  styleUrls: ['./mostrar-notificacion.component.scss']
})
export class MostrarNotificacionComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  durationInSeconds = 5;
  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  openSnackBar(message?: string, action?: string) {
    let snackBarRef=this._snackBar.open(`${message}  ${action}`, 'Close', {
      duration: 3000,
      data: `${message} ${action}, buena cursada!`
    });
    snackBarRef.afterDismissed().subscribe( ()=>{
      console.log('termino el tiempo');
    });
    snackBarRef.onAction().subscribe( ()=>{
      console.log('Cerraste mensaje');
    });
    
    /* this._snackBar.openFromComponent(MsnComponent, {
      data: 'hola'//message+action
    }); */
  }
  openCustomSnackBar(message?: string, action?: string){
    this._snackBar.openFromComponent(MsnSnackBarComponent, {
      duration: this.durationInSeconds * 1000,
      data: {
        msn:message,
        accion:action,
        img:'https://laverdadnoticias.com/__export/1610221860938/sites/laverdad/img/2021/01/09/goku_dragon_ball_super.jpg_514966513.jpg'
      }
      
    }); 
  }
  openSnackBar2() {
    this._snackBar.open('Bienvenido..', 'Cerrar!', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
  
}
@Component({
  selector: 'app-msn-SnackBar',
  templateUrl: './msn-SnackBar.component.html',
  
})
/* 
MsnSnackBarComponent agregar a:
    @NgModule -> declarations: 
    @NgModule -> entryComponents[]
*/
export class MsnSnackBarComponent{
  constructor(
    public snackBarRef: MatSnackBarRef<MsnSnackBarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
  ) {}
}
