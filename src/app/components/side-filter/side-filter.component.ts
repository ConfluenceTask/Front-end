import { ChangeDetectorRef, Component } from '@angular/core';
import { LibraryService } from '../../services/library.service';

@Component({
  selector: 'app-side-filter',
  templateUrl: './side-filter.component.html',
  styleUrls: ['./side-filter.component.scss']
})
export class SideFilterComponent {
  
  public inputFilter: string = ""

  constructor(private _libraryService: LibraryService, private _cdr: ChangeDetectorRef ){}

  public changeFilter(): void{
    console.log(this.inputFilter)

    this._libraryService.findCourse(this.inputFilter)
  }
}
