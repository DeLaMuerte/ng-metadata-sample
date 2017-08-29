import * as ngRoute from 'angular-route';

import {bundle, NgModule} from 'ng-metadata/core';

import {ContactModule} from '../contact/contact.module';
import {HeaderModule} from '../header/header.module';
import {HomeModule} from '../home/home.module';
import {LoginModule} from '../login/login.module';
import {TodoModule} from '../todo/todo.module';

import {AppConfig} from './app.config';
import {AppComponent} from './app.component';
import {CommonModule} from '../common/common.module';

@NgModule({
	imports: [
		ngRoute,

		CommonModule,

		ContactModule,
		HeaderModule,
		HomeModule,
		LoginModule,
		TodoModule
	],
	providers: [
		AppConfig
	],
	declarations: [
		AppComponent
	]
})
class AppModule {}

export const AppNg1Module: string = bundle(AppModule, ['immutable']).name;