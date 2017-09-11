import {NgModule} from 'ng-metadata/core';
import {LoginConfig} from './login.config';
import {LoginApiService} from './login.api.service';
import {LoginService} from './login.service';
import {LoginIndexComponent} from './login.component';

@NgModule({
	providers: [
		LoginConfig,
		LoginApiService,
		LoginService
	],
	declarations: [
		LoginIndexComponent
	]
})
export class LoginModule {}