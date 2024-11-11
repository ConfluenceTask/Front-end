import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {AuthorizationComponent} from "./components/authorization/authorization.component";
import { CoursesComponent } from './components/courses/courses.component';

const routes: Routes = [
  {
    path: '', component: AuthorizationComponent 
  },
  {
    path:'/courses', component: CoursesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
