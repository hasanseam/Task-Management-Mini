import { Component, Input, input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskData } from './task/task.model';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
 name = input<string>();

 @Input() uid!:string;

 tasks = dummyTasks;
 isAddingTask = false;

 get selectedUserTasks(){
  return this.tasks.filter((task)=>task.userId===this.uid);
 }

 onComleteTask(id:string){
  this.tasks = this.tasks.filter((task)=>task.id!=id);
 }

 addTask(){
  this.isAddingTask = true;
 }

 onCancel(){
  this.isAddingTask = false;
 }


 onAddTask(taskData:TaskData){

  this.tasks.push({
    id:"t"+this.tasks.length+1,
    userId:this.uid,
    title:taskData.title,
    summary:taskData.summary,
    dueDate:taskData.dueDate
  }
  )
  this.isAddingTask = false;
 }

}
