import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationComponent } from './authorization/authorization.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { HeaderComponent } from './header/header.component';
import { CoursesComponent } from './courses/courses.component';
import { MainMenuComponent } from './mainmenu/mainmenu.component';
@NgModule({
    declarations: [
        AuthorizationComponent,
        HeaderComponent,
        CoursesComponent,
        MainMenuComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        AuthorizationComponent,
        HeaderComponent,
        CoursesComponent,
        MainMenuComponent
    ],
    providers: [
        UserService
    ],
})
export class ComponentsModule {

}
