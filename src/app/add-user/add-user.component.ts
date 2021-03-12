import { Component, OnInit } from '@angular/core';
import {UserService,} from './../user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private UsersService: UserService , private router:Router) { }

  ngOnInit(): void {
  }
AddMyUser(values: any){
this.UsersService.addUser(values);
this.router.navigate(['listUser']);
}
}
