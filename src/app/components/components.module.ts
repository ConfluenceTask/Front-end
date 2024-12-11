import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';
import { ActiveHeaderComponent } from './headers/active-header/active-header.component';
import { StaticHeaderComponent } from './headers/static-header/static-header.component';
import { CardComponent } from './card/card.component';
import { RouterLink } from '@angular/router';
import { SideFilterComponent } from './side-filter/side-filter.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

@NgModule({
    declarations: [
        ActiveHeaderComponent,
        StaticHeaderComponent,
        CardComponent,
        SideFilterComponent,
        AdminPanelComponent
    ],
    imports: [
        CommonModule,
        RouterLink
    ],
    exports: [
        StaticHeaderComponent,
        ActiveHeaderComponent,
        CardComponent,
        SideFilterComponent
    ],
    providers: [
        UserService
    ],
})

export class ComponentsModule {

}