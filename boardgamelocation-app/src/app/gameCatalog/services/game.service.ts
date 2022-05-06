import { Injectable } from '@angular/core';
import { Game } from 'src/app/model/Game';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private games: Game[];
  url: string = 'http://localhost:3000/games';

  constructor(
    private http: HttpClient
  ) { }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.url);
  }

  getGame(id: number): Observable<Game> {
    return this.http.get<Game>(this.url + `/${id}`);
  }

  postGame(game: Game): Observable<any> {
    game.note = 0;
    game.reviews = [];
    return this.http.post(this.url, game);
  }

  putGame(game: Game): Observable<Game> {
    return this.http.put<Game>(this.url, game);
  }

  deleteGame(id: number): Observable<any> {
    return this.http.delete(this.url + `/${id}`);
  }

}
