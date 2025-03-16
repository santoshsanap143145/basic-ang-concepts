import { Component, Input, OnInit } from '@angular/core';
import { Istd } from 'src/app/shared/models/std';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {
  @Input() stdInfo : Array<Istd> = []
  constructor() { }

  ngOnInit(): void {
  }

}
