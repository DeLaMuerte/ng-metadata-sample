import {NgModule} from 'ng-metadata/core';

import {HeaderComponent} from './header.component';
import {HeaderMainmenuComponent} from './mainmenu/header.mainmenu.component';
import {HeaderUsermenuComponent} from './usermenu/header.usermenu.component';

@NgModule({
	declarations: [
		HeaderComponent,
		HeaderMainmenuComponent,
		HeaderUsermenuComponent
	]
})
export class HeaderModule {}