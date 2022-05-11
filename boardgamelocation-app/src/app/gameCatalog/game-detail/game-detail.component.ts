import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Game } from 'src/app/model/Game';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent {
  
  @Input() game: Game;
  @Output() removedGame = new EventEmitter<number>();
  @Output() updatedGame = new EventEmitter<number>();

  constructor(
    private gameService: GameService
  ) { }

  removeGame() {
    this.removedGame.emit(this.game.id);
  }

  updateGame() {
    this.updatedGame.emit(this.game.id);
  }

}
