import {NgModule} from 'ng-metadata/core';
import {AdminConfig} from './admin.config';
import {AdminIndexComponent} from './admin.index.component';

@NgModule({
	providers: [
		AdminConfig
	],
	declarations: [
		AdminIndexComponent
	]
})
export class AdminModule {}