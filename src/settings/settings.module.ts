import {NgModule} from 'ng-metadata/core';
import {SettingsConfig} from './settings.config';
import {SettingsIndexComponent} from './settings.index.component';

@NgModule({
	providers: [
		SettingsConfig
	],
	declarations: [
		SettingsIndexComponent
	]
})
export class SettingsModule {}