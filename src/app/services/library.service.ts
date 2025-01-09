import { Injectable } from '@angular/core';
import { coursesData$ } from '../../data/courses-list';
import { take } from 'rxjs';
import { ICourse } from '../interfaces/course.interface';
import { Router } from '@angular/router';

@Injectable()
export class LibraryService {
    public courses: ICourse[] = this.getCourses()

    constructor(private _router: Router) {}

    protected getCourses(): ICourse[] {
        let listCourses: ICourse[] = []
        coursesData$.pipe(take(1)).subscribe((arr) => {
            listCourses = arr
        })
        return listCourses
    }

    public addCourse(course: ICourse): void {
        this.courses.push(course)
        console.log(this.courses)
    }

    // Поисковик по курсам
    public findCourse(findData: string): void {
        console.log("Поиск данных:", findData); // Логируем входные данные

        if (!findData) {
            this.courses = []; // или можно оставить предыдущий список курсов
            console.log("Пустой запрос, возвращаем пустой массив курсов.");
            return;
        }

        const allCourses = this.getCourses();
        console.log("Все курсы:", allCourses); // Логируем все курсы

        this.courses = allCourses.filter((course) => {
            const lowerFindData = findData.toLowerCase();
            return (
                course.paragraph.toLowerCase().includes(lowerFindData) ||
                course.description.toLowerCase().includes(lowerFindData) ||
                course.mainText.toLowerCase().includes(lowerFindData) ||
                course.area.toLowerCase().includes(lowerFindData)
            );
        });

        console.log("Найденные курсы:", this.courses); // Логируем найденные курсы
    }

    // Удаление курса
    public deleteCourse(id: number): void {
        
    }

    // Редактирование курса
    public editCourse(id: number): void {
        const foundCourse = this.courses.find((course) => course.id === id)
        if (foundCourse) {
            localStorage.setItem('courseToEdit', JSON.stringify(foundCourse))
        }
        this._router.navigate(['/editor'])
    }

    // Добавление курса в любимые
    public favoriteCourse(id: number): void {
        this.courses.forEach((course) => {
            if (course.favorite === false && course.id === id) {
                course.favorite = true
            }
            else if (course.favorite === true && course.id === id) {
                course.favorite = false
            }
        })
    }

}

