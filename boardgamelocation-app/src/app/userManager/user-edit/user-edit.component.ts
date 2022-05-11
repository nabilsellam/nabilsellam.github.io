import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
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

  updateUser(): void {
    this.userService.putUser(this.user).subscribe({
      complete: () => this.router.navigate(['users'])
    });
  }

}
