import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserData } from '../interfaces/user.interface';

@Injectable()
export class UserService {
    protected URL: string = "ТУТ УКАЖИ URL" 
    public isLoggedIn: boolean = false

    constructor(private _http: HttpClient){}

    public getUsers(): void { 
        this._http.get(this.URL)
    } 

    public checkUsers(DataUser: IUserData): void{
        setInterval(() => this._http.post(this.URL, DataUser).subscribe().unsubscribe(), 5000)
        console.log(DataUser)
    }

    public login(): void{
        
    }

    public logout(): void{

    }

    isAuthenticated(): boolean{
        return this.isLoggedIn
    }
}