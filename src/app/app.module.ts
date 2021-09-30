import { enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// elemtos de angular 
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// angular material
import { AngularMaterialModule } from './angular-material/angular-material.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';

// componentes
import {HomeComponent } from './shader/home/home.component';
import { NavbarComponent } from './shader/navbar/navbar.component';
import { InsigniaComponent } from './components/insignia/insignia.component';
import { PanelInferiorComponent } from './components/panel-inferior/panel-inferior.component';
import { BtnComponent } from './components/btn/btn.component';
import { CardsComponent } from './components/cards/cards.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ChipsComponent } from './components/chips/chips.component';
import { SelectorFechaComponent } from './components/selector-fecha/selector-fecha.component';
import { ModalDialogsComponent } from './components/modal-dialogs/modal-dialogs.component';
import { ModalsComponent } from './components/modal-dialogs/modals/modals.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PanelExpancionComponent } from './components/panel-expancion/panel-expancion.component';
import { CampoFormularioComponent } from './components/campo-formulario/campo-formulario.component';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { IconComponent } from './components/icon/icon.component';
import { ListaComponent } from './components/lista/lista.component';
import { ListPaginaComponent } from './components/list-pagina/list-pagina.component';
import { BarraProgresoComponent } from './components/barra-progreso/barra-progreso.component';
import { RipplesComponent } from './components/ripples/ripples.component';
import { SelectComponent } from './components/select/select.component';
import { NavegacionLateralComponent } from './components/navegacion-lateral/navegacion-lateral.component';
import { DeslizamintoComponent } from './components/deslizaminto/deslizaminto.component';
import { MostrarNotificacionComponent, MsnSnackBarComponent } from './components/mostrar-notificacion/mostrar-notificacion.component';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { TableComponent } from './components/table/table.component';
import { TableNewExampleComponent } from './components/table/table-new-example/table-new-example.component';
import { PasoPasoComponent } from './components/paso-paso/paso-paso.component';

import {MatStepperModule} from '@angular/material/stepper';
import { ExampleTableOneComponent } from './components/table/example-table-one/example-table-one.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TreeComponent } from './components/tree/tree.component';
import { TreeExample1Component } from './components/tree/tree-example1/tree-example1.component';
import { TreeExample2Component } from './components/tree/tree-example2/tree-example2.component';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    InsigniaComponent,
    PanelInferiorComponent,
    BtnComponent,
    CardsComponent,
    CheckboxComponent,
    ChipsComponent,
    SelectorFechaComponent,
    ModalDialogsComponent,
    ModalsComponent,
    PanelExpancionComponent,
    CampoFormularioComponent,
    GridListComponent,
    IconComponent,
    ListaComponent,
    ListPaginaComponent,
    BarraProgresoComponent,
    RipplesComponent,
    SelectComponent,
    NavegacionLateralComponent,
    DeslizamintoComponent,
    MostrarNotificacionComponent,
    MsnSnackBarComponent,
    TableComponent,
    TableNewExampleComponent,
    PasoPasoComponent,
    ExampleTableOneComponent,
    TabsComponent,
    TreeComponent,
    TreeExample1Component,
    TreeExample2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    AngularMaterialModule,
    MatToolbarModule,
    MatIconModule,
    MatStepperModule,
    
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
  ],
  entryComponents:[ModalsComponent,MsnSnackBarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
