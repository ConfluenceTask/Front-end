import { Component, Input, OnInit } from '@angular/core';
import { coursesData$ } from '../../../data/courses-list';
import { LibraryService } from '../../services/library.service';

@Component({
  selector: 'app-list_card',
  templateUrl: './list-card.component.html',
  styleUrl: './list-card.component.scss'
})
export class ListCardComponent {

  constructor(private _libraryService: LibraryService){
    this.courses = this._libraryService.courses
  }

  public courses = this._libraryService.courses

  @Input() editorStatus!: boolean

  public deleteCourse(id: number): void{
    this._libraryService.deleteCourse(id)
  }

  public editCourse(id: number): void{
    this._libraryService.editCourse(id)
  }

  public favoriteCourse(id: number): void{
    this._libraryService.favoriteCourse(id)
  }

}