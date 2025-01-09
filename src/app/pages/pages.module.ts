import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationComponent } from './authorization/authorization.component';
import { CoursesComponent } from './courses/courses.component';
import { ComponentsModule } from '../components/components.module';
import { UserService } from '../services/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ErrorComponent } from './error/error.component';
import { RouterLink } from '@angular/router';
import { EditorComponent } from './editor/editor.component';
import { FormsModule } from '@angular/forms';
import { AdminPanelAddUserComponent } from './admin-panel-add-user/admin-panel-add-user.component';
import { LibraryService } from '../services/library.service';
import { AdminPanelUsersComponent } from './admin-panel-users/admin-panel-users.component';

@NgModule({
    declarations: [
        AuthorizationComponent,
        CoursesComponent,
        MainMenuComponent,
        ErrorComponent,
        EditorComponent,
        AdminPanelAddUserComponent,
        AdminPanelUsersComponent
    ],
    imports: [
        CommonModule,
        ComponentsModule,
        ReactiveFormsModule,
        FormsModule,
        RouterLink,
    ],
    exports: [
        AuthorizationComponent,
        CoursesComponent,
        MainMenuComponent,
    ],
    providers: [
        UserService,
        LibraryService,
    ],
})
export class PagesModule {}