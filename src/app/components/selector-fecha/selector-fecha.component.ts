import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {MatDatepicker} from '@angular/material/datepicker';
// mes y año
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as moment from 'moment';
export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-selector-fecha',
  templateUrl: './selector-fecha.component.html',
  styleUrls: ['./selector-fecha.component.scss'],
  providers: [ {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class SelectorFechaComponent implements OnInit {
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  startDate = new Date(2021, 0, 1);
  date = new FormControl(moment());
  minDate: Date;
  maxDate: Date;
  campaignOne: FormGroup;
  campaignTwo: FormGroup;
   today = new Date();
   month = this.today.getMonth();
  year = this.today.getFullYear();
  constructor() { 
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 5, 2, 20); // star: 20/feb/añoActual-5
    this.maxDate = new Date(currentYear + 3, 10, 11);// end: 11/nov/añoActual+3
   /*  const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear(); */

    this.campaignOne = new FormGroup({
      start: new FormControl(new Date(this.year, this.month, 13)),
      end: new FormControl(new Date(this.year, this.month, 16))
    });

    this.campaignTwo = new FormGroup({
      start: new FormControl(new Date(this.year, this.month, 15)),
      end: new FormControl(new Date(this.year, this.month, 19))
    });
  }
  ngOnInit(): void { }
  myFilter = (date: Date | null): boolean => {
  
    //const day = (d || new Date())?.getDay();
    console.log('Dia: ',date?.toString() )
    return true//day !== 0 && day !== 6;
  }
  chosenYearHandler(normalizedYear: moment.Moment) {
    const ctrlValue = this.date.value;
    ctrlValue.year(normalizedYear.year());
    this.date.setValue(ctrlValue);
  }

  chosenMonthHandler(normalizedMonth: moment.Moment, datepicker: MatDatepicker<moment.Moment>) {
    const ctrlValue = this.date.value;
    ctrlValue.month(normalizedMonth.month());
    this.date.setValue(ctrlValue);
    datepicker.close();
    console.log('finn')
  }

}
