import * as ngRoute from 'angular-route';

import {NgModule} from 'ng-metadata/core';

import {Module1Module} from './../module1/module1.module';
import {Module2Module} from './../module2/module2.module';

import {BaseMainComponent} from './base.main.component';
import {BaseConfig} from './base.config';

@NgModule({
	imports: [
		ngRoute,
		Module1Module,
		Module2Module
	],
	declarations: [
		BaseMainComponent
	],
	providers: [
		BaseConfig
	]
})
export class BaseModule {}