import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUserFromParam();
  }

  getUserFromParam(): void {
    this.activatedRoute.params.subscribe(
      params => {  
        this.userService.getUser(params['id']).subscribe(
          (res: User) => {
            this.user = res;
          }
        );
      }
    );
  }

}
