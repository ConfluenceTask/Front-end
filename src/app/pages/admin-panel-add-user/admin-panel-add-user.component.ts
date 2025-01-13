import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { last } from 'rxjs';
import { UserService } from '../../services/user.service';
import { IUserDataSave } from '../../interfaces/user-save.interface';

@Component({
  selector: 'app-admin-panel-add-user',
  templateUrl: './admin-panel-add-user.component.html',
  styleUrl: './admin-panel-add-user.component.scss'
})
export class AdminPanelAddUserComponent {
  
  constructor(private _userService: UserService){}

  protected dataUserSave: FormGroup = new FormGroup({
    roles: new FormControl<string>("", Validators.required),
    major: new FormControl<string>("", Validators.required),
    trainee: new FormControl<string>("", Validators.required),
    phoneNumber: new FormControl<number>(7, Validators.required),
    email: new FormControl<string>("", Validators.required),
    username: new FormControl<string>("", Validators.required),
    lastname: new FormControl<string>("", Validators.required),
    patronymic: new FormControl<string>("", Validators.required),
    password: new FormControl<number>(0, Validators.required),
    image: new FormControl<string>("", Validators.required),
  })

  protected saveUser(): void{
    const DataUserSave: IUserDataSave  = {
      roles: this.dataUserSave.controls["roles"].value,
      major: this.dataUserSave.controls["major"].value,
      trainee: this.dataUserSave.controls["trainee"].value,
      phoneNumber: this.dataUserSave.controls["phoneNumber"].value,
      email: this.dataUserSave.controls["email"].value,
      username: this.dataUserSave.controls["username"].value,
      lastname: this.dataUserSave.controls["lastname"].value,
      patronymic: this.dataUserSave.controls["patronymic"].value,
      password: this.dataUserSave.controls["password"].value,
      image: this.dataUserSave.controls["image"].value,
    }

    this._userService.saveUsers(DataUserSave)
  }

  protected clearForm(): void{
    this.dataUserSave.reset();
  }
}
