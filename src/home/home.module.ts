import * as ngRoute from 'angular-route';

import {NgModule} from 'ng-metadata/core';

import {Module1Module} from './../module1/module1.module';
import {Module2Module} from './../module2/module2.module';

import {HomeMainComponent} from './home.main.component';
import {HomeConfig} from './home.config';

@NgModule({
	imports: [
		ngRoute,
		Module1Module,
		Module2Module
	],
	declarations: [
		HomeMainComponent
	],
	providers: [
		HomeConfig
	]
})
export class HomeModule {}