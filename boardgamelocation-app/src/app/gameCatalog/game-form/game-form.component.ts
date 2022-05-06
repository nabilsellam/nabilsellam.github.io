import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  constructor(
    private gameService: GameService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  sendForm(gameForm: NgForm) {
    //this.gameService.addGame(gameForm.value);
    this.gameService.postGame(gameForm.value).subscribe(
      (res) => {
        this.router.navigate(['catalog']);
      }
    )
  }

}
