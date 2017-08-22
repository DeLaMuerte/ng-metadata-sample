import {NgModule} from 'ng-metadata/core';

import {HomeConfig} from './home.config';
import {HomeIndexComponent} from './home.index.component';

@NgModule({
	providers: [
		HomeConfig
	],
	declarations: [
		HomeIndexComponent
	]
})
export class HomeModule {}