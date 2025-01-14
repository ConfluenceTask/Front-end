import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from "./pages/authorization/authorization.component";
import { CoursesComponent } from './pages/courses/courses.component';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';
import { ErrorComponent } from './pages/error/error.component';
import { AuthorizationGuard } from './guards/authorization.guard';
import { AdminPanelAddUserComponent } from './pages/admin-panel-add-user/admin-panel-add-user.component';
import { CardComponent } from './components/card/card.component';
import { EditorComponent } from './pages/editor/editor.component';
import { AdminPanelGuard } from './guards/admin-panel.guard';
import { AdminPanelUsersComponent } from './pages/admin-panel-users/admin-panel-users.component';

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
    path: 'course/:id',
    component: CardComponent,
    canActivate: [AuthorizationGuard]
  },
  {
    path: 'editor',
    component: EditorComponent,
    canActivate: [AuthorizationGuard]
  },
  {
    path: 'admin-panel-add-user',
    component: AdminPanelAddUserComponent,
    canActivate: [AuthorizationGuard, AdminPanelGuard]
  },
  {
    path: 'admin-panel-list-users',
    component: AdminPanelUsersComponent,
    canActivate: [AuthorizationGuard, AdminPanelGuard]
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
