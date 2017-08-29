import {NgModule} from 'ng-metadata/core';
import {CommonDebugComponent} from './debug/common.debug.component';
import {CommonAlertComponent} from './alert/common.alert.component';
import {CommonAlertService} from './alert/common.alert.service';

@NgModule({
	providers: [
		CommonAlertService
	],
	declarations: [
		CommonDebugComponent,
		CommonAlertComponent
	]
})
export class CommonModule {}