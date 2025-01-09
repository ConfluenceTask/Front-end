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

        const dataUserSaveObject: IUserDataSave = {
            roles: DataUserSave.roles,
            major: DataUserSave.major,
            trainee: DataUserSave.trainee,
            phoneNumber: DataUserSave.phoneNumber,
            email: DataUserSave.email,
            username: DataUserSave.username,
            lastname: DataUserSave.lastname,
            patronymic: DataUserSave.patronymic,
            password: this.generatePassword(),
            image: DataUserSave.image
        }
        
        usersList$.pipe(take(1)).subscribe((answer) => {
            answer.push(dataUserSaveObject)
            console.log(answer)
        })

        // console.log(dataUserSaveObject)
        // this._http.post(this.URLSaveUser, dataUserSaveObject).pipe(take(1)).subscribe(result => console.log(result))    
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
                sessionStorage.setItem("username", DataUserAuthorization.username)
                sessionStorage.setItem("password", DataUserAuthorization.password)
                sessionStorage.setItem("role", answer.find(user => user.username === DataUserAuthorization.username && user.password === DataUserAuthorization.password)!.roles)
                sessionStorage.setItem("userimg", answer.find(user => user.username === DataUserAuthorization.username && user.password === DataUserAuthorization.password)!.image)
                sessionStorage.setItem("isLoggedIn", "true")
                this._router.navigate(['/main'])
            }
            else{
                alert("error")
            }
        })

        // this._http.post(this.URLCheckUsers, dataUserCheckObject).pipe(take(1)).subscribe((answer) => {
        //     if(answer === 200){
        //         ses sessionStorage.setItem("username", DataUserAuthorization.username)
        //         ses sessionStorage.setItem("password", DataUserAuthorization.password)
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
        sessionStorage.removeItem("username")
        sessionStorage.removeItem("password")
        sessionStorage.removeItem("isLoggedIn")
        sessionStorage.removeItem("role")
        sessionStorage.removeItem("userimg")
        sessionStorage.setItem("isLoggedIn", "false")
        this._router.navigate(['/authorization'])
    }

    isAuthenticated(): boolean{
        return sessionStorage.getItem("isLoggedIn") === "true"
    }

    isAdministrator(): boolean{
        return sessionStorage.getItem("role") === "admin"
    }
}