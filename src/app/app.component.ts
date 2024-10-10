import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,UserComponent,TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practice-app';
  users = DUMMY_USERS;

  username = ""
  userid = ""

  get selecteduser(){
    return this.users.find((user)=>user.id==this.userid)
  }

  onSelectedUser(id:any){
    for(let i = 0; i<this.users.length;i++){
      if(this.users[i].id==id){
        this.username = this.users[i].name;
        this.userid = id;
      }
    }
    console.log('Selected user with id '+id);
  }

}
