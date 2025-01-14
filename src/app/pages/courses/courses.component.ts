import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  public editor: boolean = false
  public userStatus: string | null = sessionStorage.getItem("role")

  protected switchStatus(): void {
    if(this.editor === true){
      this.editor = false
    }
    else{ 
      this.editor = true
    }
  }
}


