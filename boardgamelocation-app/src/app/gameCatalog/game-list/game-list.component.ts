import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Game } from 'src/app/model/Game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent {

  @Input() games: Game[];
  @Output() selectedGame = new EventEmitter();

  constructor() { }

  selectGame(game: Game) {
    this.selectedGame.emit(game.id);
  }

}
