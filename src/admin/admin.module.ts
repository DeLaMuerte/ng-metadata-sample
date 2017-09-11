import {NgModule} from 'ng-metadata/core';
import {AdminConfig} from './admin.config';
import {AdminComponent} from './admin.component';
import {AdminTab1Component} from './tab1/admin.tab1.component';
import {AdminTab2Component} from './tab2/admin.tab2.component';
import {AdminTab3Component} from './tab3/admin.tab3.component';
import {AdminTab4Component} from './tab4/admin.tab4.component';

@NgModule({
	providers: [
		AdminConfig
	],
	declarations: [
		AdminComponent,
		AdminTab1Component,
		AdminTab2Component,
		AdminTab3Component,
		AdminTab4Component
	]
})
export class AdminModule {}