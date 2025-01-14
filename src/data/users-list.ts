import { Observable } from "rxjs"
import { IUserDataSave } from "../app/interfaces/user-save.interface"

export const usersList$ = new Observable<IUserDataSave[]>((add) => {
    add.next(usersList)
    add.complete
})  

const usersList: IUserDataSave[] = [
    {
        roles: "admin",
        major: "manager",
        trainee: "Нет",
        phoneNumber: 9999999999,
        email: "mud1K@example.com",
        username: "Владислав",
        lastname: "Бородатый",
        patronymic: "Владимирович",
        password: "12345",
        image: "../../assets/images/avatar/photo_2024-05-18_21-34-38.jpg",
    },
    {
        roles: "user",
        major: "builder",
        trainee: "Да",
        phoneNumber: 7777777777,
        email: "mdfBj@example.com",
        username: "Дмитрий",
        lastname: "Генеральный",
        patronymic: "Дмитриевич",
        password: "12345",
        image: "../../assets/images/avatar/photo_2024-07-28_13-45-24.jpg",
    }
]