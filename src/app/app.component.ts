import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public users: User[];

  constructor(private userService: UserService) { 
    this.users = [];
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe( (res: any) => {
    this.users = res;
    });
  }

  public getUsers(): void {
    this.userService.getUsers().subscribe( (res: any) => {
    this.users = res;
    });
  }

  public deleteUser(userId: Number): void {
    this.userService.deleteUsers(userId).subscribe(
      () => this.ngOnInit()
    )
  }

}
