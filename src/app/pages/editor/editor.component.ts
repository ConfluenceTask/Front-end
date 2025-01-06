import { Component } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})
export class EditorComponent {


  public goBack(): void {
    window.history.back();
  }
  
  public saveCourse(): void {
    
  }

  public saveDraft(): void {
    
  }

}
