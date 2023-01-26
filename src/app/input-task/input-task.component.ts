import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input-task',
  templateUrl: './input-task.component.html',
  styleUrls: ['./input-task.component.css']
})
export class InputTaskComponent implements OnInit{
  @Output() tsks = new EventEmitter<string>();
  
  constructor(){}
  
  ngOnInit(): void {
  }
  newTask: string;
  
  Send(){
    if(this.newTask){
      this.tsks.emit(this.newTask);
      this.newTask = '';
    }
  }

}
