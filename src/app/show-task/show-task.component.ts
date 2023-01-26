import { Component,OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Task } from '../Task';
@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent implements OnInit{
  lbl:string = "Complete";
@Input() tasks: Task [];
  @Output() ID = new EventEmitter<number>();
  constructor(){}
  ngOnInit(): void {
  }
  Delete(id:number){
    this.ID.emit(id);
  }

  complete(id:number){
    this.tasks[id].isCompleted = !this.tasks[id].isCompleted;
  }
}
