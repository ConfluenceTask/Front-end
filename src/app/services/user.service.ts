import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserData } from '../interfaces/user.interface';
import { Router } from '@angular/router';
import { take } from 'rxjs';

@Injectable()
export class UserService {
    protected URLCheckUsers: string = "http://localhost:8080/api/v1/login/main" 
    protected URLAddUser: string = ""
    public isLoggedIn: boolean = false

    constructor(private _http: HttpClient, private _router: Router){}

    public getUsers(): void { 
        this._http.get(this.URLAddUser)
    }

    public checkUsers(DataUser: IUserData): void{
        const dataUserObject = {
            username: DataUser.username,
            password: DataUser.password
        }
        console.log(dataUserObject)
        this._http.post(this.URLCheckUsers, dataUserObject).pipe(take(1)).subscribe((answer) => {
            if(answer === 200){
                localStorage.setItem("username", DataUser.username)
                localStorage.setItem("password", DataUser.password)
            }
            else{
                alert("error")
            }
        })
    }

    public login(): void{
        
    }

    public logout(): void{
        localStorage.removeItem("login")
        localStorage.removeItem("password")
        this.isLoggedIn = false
        this._router.navigate(['/authorization'])
    }

    isAuthenticated(): boolean{
        return this.isLoggedIn
    }
}