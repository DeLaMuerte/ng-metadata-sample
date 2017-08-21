import * as ngRoute from 'angular-route';

import {NgModule} from 'ng-metadata/core';

import {BaseModule} from './base/base.module';

import {IndexComponent} from './index.component';
import {IndexConfig} from './index.config';
import {Module1Module} from './module1/module1.module';
import {Module2Module} from './module2/module2.module';

@NgModule({
	imports: [
		ngRoute,
		BaseModule,
		Module1Module,
		Module2Module
	],
	declarations: [
		IndexComponent
	],
	providers: [
		IndexConfig
	]
})
export class IndexModule {}