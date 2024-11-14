import { Component } from '@angular/core';

@Component({
  selector: 'app-active-header',
  templateUrl: './active-header.component.html',
  styleUrl: './active-header.component.scss'
})
export class ActiveHeaderComponent {
  public regions: string[] = []

  public filters(): void{

  }
}
