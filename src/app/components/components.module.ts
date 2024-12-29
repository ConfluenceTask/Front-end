import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';
import { ActiveHeaderComponent } from './headers/active-header/active-header.component';
import { StaticHeaderComponent } from './headers/static-header/static-header.component';
import { ListCardComponent } from './list-card/list-card.component';
import { RouterLink } from '@angular/router';
import { SideFilterComponent } from './side-filter/side-filter.component';
import { AdminPanelRedirectComponent } from './admin-panel-redirect/admin-panel-redirect.component';
import { CardComponent } from './card/card.component';
import { LibraryService } from '../services/library.service';

@NgModule({
    declarations: [
        ActiveHeaderComponent,
        StaticHeaderComponent,
        CardComponent,
        ListCardComponent,
        SideFilterComponent,
        AdminPanelRedirectComponent,
    ],
    imports: [
        CommonModule,
        RouterLink
    ],
    exports: [
        StaticHeaderComponent,
        ActiveHeaderComponent,
        CardComponent,
        ListCardComponent,
        SideFilterComponent,
        AdminPanelRedirectComponent
    ],
    providers: [
        UserService,
        LibraryService
    ],
})

export class ComponentsModule {

}