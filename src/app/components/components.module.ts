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
import { TextEditorComponent } from './text-editor/text-editor.component';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { ListUsersComponent } from './list-users/list-users.component';

@NgModule({
    declarations: [
        ActiveHeaderComponent,
        StaticHeaderComponent,
        CardComponent,
        ListCardComponent,
        SideFilterComponent,
        AdminPanelRedirectComponent,
        TextEditorComponent,
        ListUsersComponent
    ],
    imports: [
        CommonModule,
        RouterLink,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatButtonToggleModule,
        FormsModule
    ],
    exports: [
        StaticHeaderComponent,
        ActiveHeaderComponent,
        CardComponent,
        ListCardComponent,
        SideFilterComponent,
        AdminPanelRedirectComponent,
        TextEditorComponent,
        ListUsersComponent
    ],
    providers: [
        UserService,
        LibraryService
    ],
})

export class ComponentsModule {

}