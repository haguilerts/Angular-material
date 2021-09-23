import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-campo-formulario',
  templateUrl: './campo-formulario.component.html',
  styleUrls: ['./campo-formulario.component.scss']
})
export class CampoFormularioComponent implements OnInit {
  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  option: FormGroup;
  colorControl = new FormControl('primary');
  fontSizeControl = new FormControl(16, Validators.min(10));

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  matcher = new MyErrorStateMatcher();


  constructor(fb: FormBuilder) { 
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
    this.option = fb.group({
      color: this.colorControl,
      fontSize: this.fontSizeControl,
    });
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debes ingresar un valor';
    }
    return this.email.hasError('email') ? 'No es un email valido' : '';
  }
  getFontSize() {
    return Math.max(10, this.fontSizeControl.value);
  }

  ngOnInit(): void {
  }

}
