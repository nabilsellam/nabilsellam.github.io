import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent {

  constructor(
    private gameService: GameService,
    private router: Router
  ) { }

  sendForm(gameForm: NgForm) {
    this.gameService.postGame(gameForm.value).subscribe(
      (res) => {
        this.router.navigate(['catalog']);
      }
    )
  }

}
