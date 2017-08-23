import * as ngRoute from 'angular-route';

import {NgModule} from 'ng-metadata/core';

import {ContactModule} from '../contact/contact.module';
import {HeaderModule} from '../header/header.module';
import {HomeModule} from '../home/home.module';
import {LoginModule} from '../login/login.module';
import {Module2Module} from '../module2/module2.module';

import {AppConfig} from './app.config';
import {AppComponent} from './app.component';

@NgModule({
	imports: [
		ngRoute,

		ContactModule,
		HeaderModule,
		HomeModule,
		LoginModule,
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