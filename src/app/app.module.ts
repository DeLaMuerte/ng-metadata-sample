import * as angularUiRouter from '@uirouter/angularjs';
import * as angularImmutable from 'angular-immutable';

import {bundle, NgModule} from 'ng-metadata/core';

import {CommonModule} from '../common/common.module';

import {AdminModule} from '../admin/admin.module';
import {ContactModule} from '../contact/contact.module';
import {HeaderModule} from '../header/header.module';
import {HomeModule} from '../home/home.module';
import {LoginModule} from '../login/login.module';
import {SettingsModule} from '../settings/settings.module';

import {TodoModule} from '../todo/todo.module';

import {AppConfig} from './app.config';
import {AppComponent} from './app.component';
import {App404Component} from './404/app.404.component';
@NgModule({
	imports: [
		CommonModule,

		AdminModule,
		ContactModule,
		HeaderModule,
		HomeModule,
		LoginModule,
		SettingsModule,
		TodoModule
	],
	providers: [
		AppConfig
	],
	declarations: [
		AppComponent,
		App404Component
	]
})
class AppModule {}

export const AppNg1Module: string = bundle(AppModule, [angularUiRouter.default, angularImmutable]).name;