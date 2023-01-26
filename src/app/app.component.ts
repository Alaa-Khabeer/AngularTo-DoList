import { Component, OnInit} from '@angular/core';
import { Task } from './Task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  constructor() {}
  ngOnInit() {}

  title = 'To-Do List';
  Tasks:Task[] = []

  Add(task:string){
      if(task){
          let tsk = new Task();
          tsk.txt = task;
          tsk.isCompleted = false;
          this.Tasks.push(tsk);
      }
  }

  del(id:number){
    this.Tasks = this.Tasks.filter((v,i) => i !== id);
  }

}
