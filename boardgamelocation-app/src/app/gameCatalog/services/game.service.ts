import { Injectable } from '@angular/core';
import { Game } from 'src/app/model/Game';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private games: Game[];
  serverUrl: string = environment.serverEndpoint + '/games';

  constructor(
    private http: HttpClient
  ) { }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.serverUrl);
  }

  getGame(id: number): Observable<Game> {
    return this.http.get<Game>(this.serverUrl + `/${id}`);
  }

  postGame(game: Game): Observable<any> {
    game.note = 0;
    game.reviews = [];
    return this.http.post(this.serverUrl, game);
  }

  putGame(game: Game): Observable<any> {
    return this.http.put(this.serverUrl + `/${game.id}`, game);
  }

  deleteGame(id: number): Observable<any> {
    return this.http.delete(this.serverUrl + `/${id}`);
  }

}
