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
import { TextEditorComponent } from './text-editor/text-editor.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { AdminPanelAddUserComponent } from './admin-panel/admin-panel-add-user.component';

@NgModule({
    declarations: [
        AuthorizationComponent,
        CoursesComponent,
        MainMenuComponent,
        ErrorComponent,
        EditorComponent,
        TextEditorComponent,
        AdminPanelAddUserComponent
    ],
    imports: [ 
        CommonModule,
        ComponentsModule,
        ReactiveFormsModule,
        FormsModule,
        RouterLink,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatButtonToggleModule
    ],
    exports: [
        AuthorizationComponent,
        CoursesComponent,
        MainMenuComponent,
        TextEditorComponent
    ],
    providers: [
        UserService
    ],
})
export class PagesModule {}