import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    protected URL: string = "ТУТ УКАЖИ URL" 

    constructor(private _http: HttpClient){}

    public getUsers(): void { 
        this._http.get(this.URL)
    } 

    public checkUsers(login: string, password: string): void{
        setInterval(() => this._http.post(this.URL, {login, password}).subscribe().unsubscribe(), 5000)
    }
}