import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  public courses$ = courses

  @Input() editorStatus!: boolean
}

let courses = [
  {
    name: "Область 1",
    image: ""
  },
  {
    name: "Облатсь 2",
    image: ""
  }
]