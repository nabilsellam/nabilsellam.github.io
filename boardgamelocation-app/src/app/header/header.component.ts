import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserService } from '../userManager/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  users: User[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsersList();    
    this.userService.$event().subscribe(
      () => {
        this.getUsersList();
      }
    );
    }

  getUsersList() {
    this.userService.getUsers().subscribe(
      (res: User[]) => {
        this.users = res;
      }
    );
  }

}

