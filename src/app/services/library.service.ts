import { Injectable } from '@angular/core';
import { coursesData$ } from '../../data/courses-list';
import { take } from 'rxjs';

@Injectable()
export class LibraryService {

    public findCourses(): void {
        coursesData$
    }
}