import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ActiveHeaderComponent } from './headers/active-header/active-header.component';
import { MainMenuComponent } from '../pages/main-menu/main-menu.component';
import { StaticHeaderComponent } from './headers/static-header/static-header.component';
import { CardComponent } from './card/card.component';
@NgModule({
    declarations: [
        ActiveHeaderComponent,
        StaticHeaderComponent,
        CardComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        StaticHeaderComponent,
        ActiveHeaderComponent,
        CardComponent
    ],
    providers: [
        UserService
    ],
})
export class ComponentsModule {

}
