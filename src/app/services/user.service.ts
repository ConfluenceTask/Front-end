import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { IUserDataCheck } from '../interfaces/user-check.interface';
import { IUserDataSave } from '../interfaces/user-save.interface';
import { usersList$ } from '../../data/users-list';

@Injectable()
export class UserService {
    protected URLCheckUsers: string = "http://localhost:8080/api/v1/login/main" 
    protected URLSaveUser: string = "http://localhost:8080/api/v1/users/save"

    constructor(private _http: HttpClient, private _router: Router){}

    // Сохраниенеи нового пользователя
    public saveUsers(DataUserSave: IUserDataSave): void {
        const dataUserSaveObject: Object = {
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

    // Проверка пользвателя
    public checkUsers(DataUserAuthorization: IUserDataCheck): void{
        let dataUserCheckObject: Object = {
            username: DataUserAuthorization.username,
            password: DataUserAuthorization.password
        }
        console.log(dataUserCheckObject)
        usersList$.pipe(take(1)).subscribe((answer) => {
            if(answer.find(user => user.username === DataUserAuthorization.username && user.password === DataUserAuthorization.password)){
                localStorage.setItem("username", DataUserAuthorization.username)
                localStorage.setItem("password", DataUserAuthorization.password)
                localStorage.setItem("role", answer.find(user => user.username === DataUserAuthorization.username && user.password === DataUserAuthorization.password)!.roles)
                localStorage.setItem("isLoggedIn", "true")
                this._router.navigate(['/main'])
            }
            else{
                alert("error")
            }
        })

        // this._http.post(this.URLCheckUsers, dataUserCheckObject).pipe(take(1)).subscribe((answer) => {
        //     if(answer === 200){
        //         localStorage.setItem("username", DataUserAuthorization.username)
        //         localStorage.setItem("password", DataUserAuthorization.password)
        //     }
        //     else{
        //         alert("error")
        //     }
        // })
    }
    
    // Генерация пароля
    protected generatePassword(length: number = 12): string {
        const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let password: string = '';
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
        localStorage.removeItem("isLoggedIn")
        localStorage.setItem("isLoggedIn", "false")
        this._router.navigate(['/authorization'])
    }

    isAuthenticated(): boolean{
        return localStorage.getItem("isLoggedIn") === "true"
    }

    isAdministrator(): boolean{
        return localStorage.getItem("role") === "admin"
    }
}