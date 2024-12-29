import { Observable } from "rxjs"
import { ICourse } from "../app/interfaces/course.interface"

export const coursesData$ = new Observable<ICourse[]>((add) => {
    add.next(coursesData)
    add.complete
})  

const coursesData = [
    {
        id: 1,
        avatar: "",
        paragraph: "Карта 1",
        description: "Какое-то описаие",
        mainText: "тут должен быть крутой текст но тут ничего нету",
        area: "",
    },
    {
        id: 2,
        avatar: "",
        paragraph: "Карта 2",
        description: "Какое-то описаие",
        mainText: "тут должен быть крутой текст но тут ничего нету",
        area: "",
    },
    {
        id: 3,
        avatar: "",
        paragraph: "Карта 3",
        description: "Какое-то описаие",
        mainText: "тут должен быть крутой текст но тут ничего нету",
        area: "",
    },
    {
        id: 4,
        avatar: "",
        paragraph: "Карта 4",
        description: "Какое-то описаие",
        mainText: "тут должен быть крутой текст но тут ничего нету",
        area: "",
    },
] 