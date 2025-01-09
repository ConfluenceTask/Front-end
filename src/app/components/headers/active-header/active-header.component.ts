import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-active-header',
  templateUrl: './active-header.component.html',
  styleUrl: './active-header.component.scss'
})
export class ActiveHeaderComponent {

  constructor(private _router: Router, private _userService: UserService){}

  public regions: string[] = []
  public userName: string | null = sessionStorage.getItem("username")
  public userImg: string | null = sessionStorage.getItem("userimg")
  public section?: string = ""


  public leaveAccount(): void{
    this._userService.logout()
  }

  public setSection(): void{
    if(this.section === "building"){
      this._router.navigate(['/courses'])
    }
    else if(this.section === ""){
      this._router.navigate(['/main'])
    }
  }
}
