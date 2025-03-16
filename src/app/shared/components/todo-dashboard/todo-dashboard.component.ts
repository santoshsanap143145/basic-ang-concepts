import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {
  skillArray : Array<string> = ["HTML", "CSS", "SASS"]
  constructor() { }

  ngOnInit(): void {
  }
  getSkill(skill: string){
    this.skillArray.push(skill)
  }
}
