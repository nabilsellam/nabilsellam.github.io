import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private gameService: GameService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getGameList();
  }
  
  selectedGameRcv(selectedGameId: number) {
    const found = this.games.find(g => g.id == selectedGameId);
    if (found) {
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
    const navUrl = 'catalog/' + updatedGameId;
    this.router.navigate([navUrl]);
  }

  addGame() {
    const navUrl = 'catalog/new'
    this.router.navigate([navUrl]);
  }

  getGameList() {
    this.gameService.getGames().subscribe(
      (res: Game[]) => {
        this.games = res;
      }
    );
  }

}
