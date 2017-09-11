import {NgModule} from 'ng-metadata/core';
import {CommonDebugComponent} from './debug/common.debug.component';
import {CommonAlertsComponent} from './alerts/common.alerts.component';
import {CommonAlertService} from './alert/common.alert.service';

@NgModule({
	providers: [
		CommonAlertService
	],
	declarations: [
		CommonAlertsComponent,
		CommonDebugComponent
	]
})
export class CommonModule {}