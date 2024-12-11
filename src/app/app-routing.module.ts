import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from "./pages/authorization/authorization.component";
import { CoursesComponent } from './pages/courses/courses.component';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';
import { ErrorComponent } from './pages/error/error.component';
import { AuthorizationGuard } from './guards/authorization.guard';
import { TextEditorComponent } from './pages/text-editor/text-editor.component';
import { AdminPanelAddUserComponent } from './pages/admin-panel/admin-panel-add-user.component';

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
    path: 'main',
    component: MainMenuComponent,
    canActivate: [AuthorizationGuard]
  },
  {
    path: 'courses',
    component: CoursesComponent,
    canActivate: [AuthorizationGuard]
  },
  {
    path: 'editor',
    component: TextEditorComponent,
    canActivate: [AuthorizationGuard]
  },
  {
    path: 'admin-panel-add-user',
    component: AdminPanelAddUserComponent,
    canActivate: [AuthorizationGuard]
  },
  {
    path: '**',
    component: ErrorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
