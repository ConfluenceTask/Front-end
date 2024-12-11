import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { IUserDataCheck } from '../interfaces/user-check.interface';
import { IUserDataSave } from '../interfaces/user-save.interface';

@Injectable()
export class UserService {
    protected URLCheckUsers: string = "http://localhost:8080/api/v1/login/main" 
    protected URLSaveUser: string = "http://localhost:8080/api/v1/users/save"
    public isLoggedIn: boolean = true

    constructor(private _http: HttpClient, private _router: Router){}

    public saveUsers(DataUserSave: IUserDataSave): void {
        const dataUserSaveObject = {
            roles: DataUserSave.roles,
            major: DataUserSave.major,
            trainee: DataUserSave.trainee,
            phoneNumber: DataUserSave.phoneNumber,
            email: DataUserSave.email,
            username: DataUserSave.username,
            lastname: DataUserSave.lastname,
            patronymic: DataUserSave.patronymic,
            password: this.generatePassword()
        }
        console.log(dataUserSaveObject)
        this._http.post(this.URLSaveUser, dataUserSaveObject).pipe(take(1)).subscribe(result => console.log(result))    
    }

    public checkUsers(DataUserAuthorization: IUserDataCheck): void{
        const dataUserCheckObject = {
            username: DataUserAuthorization.username,
            password: DataUserAuthorization.password
        }
        console.log(dataUserCheckObject)
        this._http.post(this.URLCheckUsers, dataUserCheckObject).pipe(take(1)).subscribe((answer) => {
            if(answer === 200){
                localStorage.setItem("username", DataUserAuthorization.username)
                localStorage.setItem("password", DataUserAuthorization.password)
            }
            else{
                alert("error")
            }
        })
    }

    protected generatePassword(length: number = 12): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let password = '';
        for (let i = 0; i < length; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return password;
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