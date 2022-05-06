import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[];
  private subject: Subject<string> = new Subject<string>();
  url: string = 'http://localhost:3000/users';

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
    }))
  }

  $event(): Observable<string> {
    return this.subject.asObservable();
  }

}