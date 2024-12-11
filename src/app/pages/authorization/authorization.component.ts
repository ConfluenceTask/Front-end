import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.scss'
})
export class AuthorizationComponent {

  constructor(private _userService: UserService){}

  public dataUser: FormGroup = new FormGroup({
    username: new FormControl<string>("", Validators.required),
    password: new FormControl<string>("", Validators.required)
  })

  protected onClick(): void{
    const DataUser = {
      username: this.dataUser.controls["username"].value,
      password: this.dataUser.controls["password"].value
    }
    
    this._userService.checkUsers(DataUser)
  }
}
