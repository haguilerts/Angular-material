import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation, STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-paso-paso',
  templateUrl: './paso-paso.component.html',
  styleUrls: ['./paso-paso.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class PasoPasoComponent implements OnInit {
  isLinear:boolean = false;
  firstFormGroup: FormGroup=new FormGroup({});
  secondFormGroup: FormGroup=new FormGroup({});
  thirdFormGroup: FormGroup=new FormGroup({});

  formGroup: FormGroup=new FormGroup({});
  isOptional = false;
  stepperOrientation: Observable<StepperOrientation>

  constructor(private _formBuilder: FormBuilder,    breakpointObserver: BreakpointObserver) {
      this.stepperOrientation = breakpointObserver.observe('(min-width: 800px)')
        .pipe(map( ({matches}) => matches ? 'horizontal' : 'vertical'))
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    
  }
}
