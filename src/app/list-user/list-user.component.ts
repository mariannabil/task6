
import {UserModel} from './../user.model';
import {UserService} from './../user.service';
import { Component, OnInit } from '@angular/core';

 import { from } from 'rxjs';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users!: UserModel[]; 
  constructor(private UserService: UserService) {
    this.getAll();
   }

  ngOnInit(): void {
   
  }

getAll() {
  this.UserService.getAllUsers().subscribe(
    data => this.users = data
  );
}
}