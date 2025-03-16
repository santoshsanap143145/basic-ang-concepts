import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  @Output() emitskill = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }
  addOnClick(skill: HTMLInputElement){
    let newSkill: string = skill.value
    if(newSkill.length > 0){
      this.emitskill.emit(newSkill)
      skill.value = ''
    }
  }

}
