import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancelTask = new EventEmitter();

  @Output() addTask = new EventEmitter<TaskData>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';


  onCancel(){
    this.cancelTask.emit();
  }

  onSubmit(){
    this.addTask.emit({
      "title":this.enteredTitle,
      "summary":this.enteredSummary,
      "dueDate":this.enteredDate 
    });
  }
}
