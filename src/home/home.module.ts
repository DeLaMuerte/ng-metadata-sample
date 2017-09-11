import {NgModule} from 'ng-metadata/core';

import {HomeConfig} from './home.config';
import {HomeComponent} from './home.component';

@NgModule({
	providers: [
		HomeConfig
	],
	declarations: [
		HomeComponent
	]
})
export class HomeModule {}