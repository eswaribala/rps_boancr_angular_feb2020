import { Component, OnInit } from '@angular/core';
import {User} from "../models/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   user=new User("","");
  constructor() { }

  ngOnInit() {
  }

  login(event)
  {
    event.preventDefault();
    console.log(this.user);
  }
  newUser() {
    this.user = new User('','');
  }
}
