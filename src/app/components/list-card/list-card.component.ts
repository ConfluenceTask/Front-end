import { Component, Input } from '@angular/core';
import { LibraryService } from '../../services/library.service';
import { coursesData$ } from '../../../data/courses-data';

@Component({
  selector: 'app-list_card',
  templateUrl: './list-card.component.html',
  styleUrl: './list-card.component.scss'
})
export class ListCardComponent {

  constructor(private _libraryService: LibraryService){}
  public courses$ = coursesData$

  @Input() editorStatus!: boolean
}