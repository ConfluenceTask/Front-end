import { Component } from '@angular/core';
import { LibraryService } from '../../services/library.service';
import { FormControl, FormGroup } from '@angular/forms';
import { IAddCourse } from '../../interfaces/add-course.interface';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})
export class EditorComponent {

  constructor(private _libraryService: LibraryService) { }

  public courseContent: FormGroup = new FormGroup({
    paragraph: new FormControl<string>(''),
    description: new FormControl<string>(''),
    // avatar: new FormControl<string>(''),
  });

  public goBack(): void {
    window.history.back();
  }
  
  public saveCourse(): void {
    const courseData: IAddCourse = {
      paragraph: this.courseContent.controls["paragraph"].value,
      description: this.courseContent.controls["description"].value,
      // avatar: this.courseContent.controls["image"].value
    }

    this._libraryService.addCourse(courseData)
  }

  public saveDraft(): void {
    
  }

}
