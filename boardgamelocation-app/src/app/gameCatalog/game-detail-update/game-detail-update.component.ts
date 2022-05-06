import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Game } from 'src/app/model/Game';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game-detail-update',
  templateUrl: './game-detail-update.component.html',
  styleUrls: ['./game-detail-update.component.css']
})
export class GameDetailUpdateComponent implements OnInit {

  @Input() game: Game;
  
  constructor(
    private gameService: GameService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  sendForm(gameForm: NgForm) {
    //this.gameService.addGame(gameForm.value);
    this.gameService.putGame(gameForm.value).subscribe(
      (res) => {
        this.router.navigate(['catalog']);
      }
    )
  }

}
