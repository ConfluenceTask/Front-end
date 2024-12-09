import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserData } from '../interfaces/user.interface';
import { take } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
    protected URL: string = "localhost:8080/api/v1/users/main" 
    public isLoggedIn: boolean = false

    constructor(private _http: HttpClient, private _router: Router){}

    public getUsers(): void { 
        this._http.get(this.URL)
    } 

    public checkUsers(DataUser: IUserData): void{
        const dataUserObject = {
            login: DataUser.login,
            password: DataUser.password
        }
        this._http.post(this.URL, dataUserObject).pipe(take(1)).subscribe((answer) => {
            console.log(answer)
            if(answer === 200){
                localStorage.setItem("login", DataUser.login)
                localStorage.setItem("password", DataUser.password)
                this.isLoggedIn = true
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