import { Injectable } from '@angular/core';
import { coursesData$ } from '../../data/courses-data';
import { take } from 'rxjs';

@Injectable()
export class LibraryService {

    public findCourses(): void {
        coursesData$
    }
}