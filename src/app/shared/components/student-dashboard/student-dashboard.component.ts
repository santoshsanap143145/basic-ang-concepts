import { Component, OnInit } from '@angular/core';
import { Istd } from '../../models/std';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {
  stdArray : Array<Istd> = [
    {
      fname: "Mike",
      lname: "Tyson",
      email: "mike@gmail.com",
      contact: 9645867514
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  getStdObj(std : Istd){
    this.stdArray.push(std)
  }
}
