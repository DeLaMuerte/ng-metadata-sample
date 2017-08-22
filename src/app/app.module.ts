import * as ngRoute from 'angular-route';

import {NgModule} from 'ng-metadata/core';

import {HeaderModule} from './../header/header.module';
import {HomeModule} from './../home/home.module';
import {Module1Module} from './../module1/module1.module';
import {Module2Module} from './../module2/module2.module';

import {AppConfig} from './app.config';
import {AppComponent} from './app.component';

@NgModule({
	imports: [
		ngRoute,
		HeaderModule,
		HomeModule,
		Module1Module,
		Module2Module
	],
	providers: [
		AppConfig
	],
	declarations: [
		AppComponent
	]
})
export class AppModule {}