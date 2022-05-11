import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[];
  private subject: Subject<string> = new Subject<string>();
  url: string = environment.serverEndpoint + '/users';

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.url + `/${id}`);
  }

  addUser(user: User) {
    user.id = this.users[this.users.length-1].id + 1;
    user.rentedGames = [];
    this.users.push(user);
  }

  postUser(user: User): Observable<any> {
    user.rentedGames = [];
    return this.http.post(this.url, user).pipe(tap({
      complete: () => {
        this.subject.next("refresh");
      }
    }));
  }

  putUser(user: User): Observable<User> {
    return this.http.put<User>(this.url + `/${user.id}`, user).pipe(tap({
      complete: () => {
        this.subject.next("refresh");
      }
    }));
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(this.url + `/${id}`).pipe(tap({
      complete: () => {
        this.subject.next("refresh");
      }
    }));
  }

  $event(): Observable<string> {
    return this.subject.asObservable();
  }

}
