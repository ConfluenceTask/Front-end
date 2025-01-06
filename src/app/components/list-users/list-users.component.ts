import { Component } from '@angular/core';
import { usersList$ } from '../../../data/users-list';
import { Observable, ObservedValueOf } from 'rxjs';
import { IUserDataSave } from '../../interfaces/user-save.interface';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.scss'
})
export class ListUsersComponent {
  public users$: Observable<IUserDataSave[]> = usersList$

}
