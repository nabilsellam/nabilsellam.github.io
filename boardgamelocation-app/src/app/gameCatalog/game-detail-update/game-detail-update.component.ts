import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { Game } from 'src/app/model/Game';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game-detail-update',
  templateUrl: './game-detail-update.component.html',
  styleUrls: ['./game-detail-update.component.css']
})
export class GameDetailUpdateComponent implements OnInit {

  game: Game;
  
  constructor(
    private gameService: GameService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getGameFromParam();
  }

  getGameFromParam(): void {
    this.activatedRoute.params.subscribe(
      params => {  
        this.gameService.getGame(params['id']).subscribe(
          (res: Game) => {
            this.game = res;
          }
        );
      }
    );
  }

  updateGameInfo(): void {
    this.gameService.putGame(this.game).subscribe({
      complete: () => this.router.navigate(['catalog'])
    })
  }

}
