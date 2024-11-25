import { NgModule } from '@angular/core';
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

@NgModule({
    declarations: [
        AuthorizationComponent,
        CoursesComponent,
        MainMenuComponent,
        ErrorComponent,
        EditorComponent
    ],
    imports: [ 
        CommonModule,
        ComponentsModule,
        ReactiveFormsModule,
        RouterLink
    ],
    exports: [
        AuthorizationComponent,
        CoursesComponent,
        MainMenuComponent
    ],
    providers: [
        UserService
    ],
})
export class PagesModule {}