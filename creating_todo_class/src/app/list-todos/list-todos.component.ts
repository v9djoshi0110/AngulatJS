import { Component, OnInit } from '@angular/core';

export class Todo {

  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    readonly targetDate: Date
  ) { }                               // these constructor variables becomes the member of the Class Todo
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1, 'Learn to Dance', false, new Date()),
    new Todo(1, 'Visit to Canada, and Long Beach, USA', false, new Date()),
    new Todo(1, 'Learn Swimming', false, new Date()),
    new Todo(1, 'Become expert in Angular JS', false, new Date())
  ]

  /*
  // other way
todoes=[
  { id: 1, description: 'Learn to Dance' },
  { id: 2, description: 'Visit to Canada, and Long Beach, USA' },
  { id: 3, description: 'Learn Swimming' }
]

*/

  constructor() { }

  ngOnInit(): void {
  }

}
