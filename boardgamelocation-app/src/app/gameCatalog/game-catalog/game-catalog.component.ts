import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/model/Game';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game-catalog',
  templateUrl: './game-catalog.component.html',
  styleUrls: ['./game-catalog.component.css']
})
export class GameCatalogComponent implements OnInit {

  games: Game[];
  selectedGame: Game | undefined;

  constructor(
    private gameService: GameService
  ) { }

  ngOnInit(): void {
    this.getGameList();
  }
  
  selectedGameRcv(selectedGameId: number) {
    const found = this.games.find(g => g.id == selectedGameId);
    if (found != null) {
      this.selectedGame = found;
    }
  }

  removedGameRcv(removedGameId: number) {
    this.gameService.deleteGame(removedGameId).subscribe(
      (res) => {
        this.getGameList();
        this.selectedGame = undefined;
      }
    );
  }

  updatedGameRcv(updatedGameId: number) {

  }

  updatedGame(updatedGameId: number) {
    /*
    this.gameService.updateGame(updatedGameId).subscribe(
      (res) => {
        this.getGameList();
      }
    );
    */
  }

  getGameList() {
    this.gameService.getGames().subscribe(
      (res: Game[]) => {
        this.games = res;
      }
    );
  }

}
