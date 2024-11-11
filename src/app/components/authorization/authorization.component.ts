import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../interfaces/user.interface";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.scss'
})
export class AuthorizationComponent {

  public dataUser: FormGroup = new FormGroup({
    login: new FormControl<string>('', Validators.required),
    password: new FormControl<string>('', Validators.required)
  })

  protected onClick(): void{
    const DataUser = {
      login: this.dataUser.controls['login'].value,
      password: this.dataUser.controls['password'].value
    }

    console.log(DataUser)
  }
}