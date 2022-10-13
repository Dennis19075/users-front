import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { User } from './user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/user`);
  }

  public addUsers(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/user`, user);
  }

  public updateUsers(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiServerUrl}/user`, user);
  }

  public deleteUsers(userId: Number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/user/${userId}`);
  }
}
