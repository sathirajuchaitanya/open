import { Component, OnInit } from '@angular/core';
import {IEmiCalculator} from '../shared/interfaces/emi-calculato.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  emiCalculator:IEmiCalculator;
  constructor() {
   }

  ngOnInit(): void {
  this.initializeValues();
  }
  initializeValues(){
    this.emiCalculator={
      monthlyIncome:0,
      monthlyExpenses:0,
      repaymentenure:0,
      existingloans:false,
      emiExistingLoan:0,
      eligibiltyLoan:{
        loanAmount:100000,
        montlyEmi:15000
      }

    }
    console.log(this.emiCalculator);
  }

  // tslint:disable-next-line: typedef
  changeBackGroundColor(id){
    let value = 0;
    let range = null;
    if ( id === 'monthlyIncome'){
      range = (document.getElementById(id) as HTMLInputElement);
      this.emiCalculator.monthlyIncome = Number(range.value);
      value = (Number(range.value) - 100000) / (300000 - 100000) * 100;
      range.style.background = 'linear-gradient(to right, #663399 0%, rgb(102, 51, 153)' + value + '%, #fff ' + value + '%, white 100%)'
    }else{
      range = (document.getElementById(id) as HTMLInputElement);
      this.emiCalculator.monthlyExpenses = Number(range.value);
      value = (Number(range.value) - 0) / (100000 - 0 ) * 100;
      range.style.background = 'linear-gradient(to right, #663399 0%, rgb(102, 51, 153)' + value + '%, #fff ' + value + '%, white 100%)'
    }

  }

}
