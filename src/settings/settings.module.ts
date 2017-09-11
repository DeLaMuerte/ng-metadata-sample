import {NgModule} from 'ng-metadata/core';
import {SettingsConfig} from './settings.config';
import {SettingsComponent} from './settings.component';

@NgModule({
	providers: [
		SettingsConfig
	],
	declarations: [
		SettingsComponent
	]
})
export class SettingsModule {}