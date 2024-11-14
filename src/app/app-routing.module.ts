import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from "./pages/authorization/authorization.component";
import { CoursesComponent } from './pages/courses/courses.component';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'authorization',
    pathMatch: 'full'
  },
  {
    path: 'authorization',
    component: AuthorizationComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'main',
    component: MainMenuComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
