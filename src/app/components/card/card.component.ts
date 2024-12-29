import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { coursesData$ } from '../../../data/courses-data';
import { ICourse } from '../../interfaces/course.interface';
import { take } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit{
  public course: ICourse | undefined;
  public id?: number

  constructor(private _activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    coursesData$.pipe(take(1)).subscribe(arr => {
      this.id = this._activatedRoute.snapshot.params['id']
      this.course = arr.find(course => course.id === Number(this.id))
      console.log(this.id, this.course)
    })
  }
}