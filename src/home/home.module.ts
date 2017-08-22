import * as ngRoute from 'angular-route';

import {NgModule} from 'ng-metadata/core';

import {Module1Module} from './../module1/module1.module';
import {Module2Module} from './../module2/module2.module';

import {HomeRun} from './home.run';
import {HomeConfig} from './home.config';
import {HomeIndexComponent} from './home.index.component';

@NgModule({
	imports: [
		ngRoute,
		Module1Module,
		Module2Module
	],
	providers: [
		HomeRun,
		HomeConfig
	],
	declarations: [
		HomeIndexComponent
	]
})
export class HomeModule {}