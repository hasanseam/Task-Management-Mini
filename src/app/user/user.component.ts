import { Component,computed,signal, input, output, Output, EventEmitter, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required:true}) user!:User;
  @Input({required:true}) selected!:boolean;
 // @Input ({required:true}) id!:string;
  //avatar = input.required<string>(); // input using signal
 // username = input.required<string>(); //input username using signal 

   

  @Output() select = new EventEmitter<string>(); // extra type safety

  //select = output<string>(); //emit event throug output function

  imagePath = computed(()=>{
     return 'assets/users/'+this.user.avatar;
  })

  onSelectedUser(){
    this.select.emit(this.user.id); // id has been emitted as a result
  }


  /**selectedUser = signal(DUMMY_USERS[0]);
  
  imagePath = computed(()=>'assets/users/'+this.selectedUser().avatar);

  onSelectedUser(){
    const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }**/
}
