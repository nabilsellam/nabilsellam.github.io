import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  sendForm(userForm: NgForm) {
    //envoyer le formulaire
    this.userService.postUser(userForm.value).subscribe(
      (res) => {
        this.router.navigate(['users']);
      }
    )
  }

}
