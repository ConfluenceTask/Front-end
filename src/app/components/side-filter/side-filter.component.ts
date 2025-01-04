import { Component } from '@angular/core';

@Component({
  selector: 'app-side-filter',
  templateUrl: './side-filter.component.html',
  styleUrls: ['./side-filter.component.scss']
})
export class SideFilterComponent {
  
  public inputFilter: string = ""

  public changeFilter(): void{
    console.log(this.inputFilter)
  }
}
