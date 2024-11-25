import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';
import { ActiveHeaderComponent } from './headers/active-header/active-header.component';
import { StaticHeaderComponent } from './headers/static-header/static-header.component';
import { CardComponent } from './card/card.component';
import { RouterLink } from '@angular/router';

@NgModule({
    declarations: [
        ActiveHeaderComponent,
        StaticHeaderComponent,
        CardComponent
    ],
    imports: [
        CommonModule,
        RouterLink
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