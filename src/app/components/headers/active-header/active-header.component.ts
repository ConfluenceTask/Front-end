import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-active-header',
  templateUrl: './active-header.component.html',
  styleUrl: './active-header.component.scss'
})
export class ActiveHeaderComponent {

  constructor(private _router: Router){}

  public regions: string[] = []
  public userName: string | null = sessionStorage.getItem("username")
  public section?: string = ""


  public setSection(): void{
    if(this.section === "building"){
      this._router.navigate(['/courses'])
    }
    else if(this.section === ""){
      this._router.navigate(['/main'])
    }
  }
}
