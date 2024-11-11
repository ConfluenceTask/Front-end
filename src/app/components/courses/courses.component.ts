import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  public courses$ = courses
}

let courses = [
  {
    name: "courseOne",
    description: "Много текста"
  },
  {
    name: "courseTwo",
    description: "Очень много текста"
  }
]
