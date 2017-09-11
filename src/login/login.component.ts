import {Component} from 'ng-metadata/core';
import {LoginService} from './login.service';

@Component({
	selector: 'gsc-login',
	template: require('./login.component.html')
})
export class LoginIndexComponent {

	constructor(
		private loginService: LoginService
	) {}

	public credentials: {name: string, password: string} = {
		name: '',
		password: ''
	};

	public login() {
		this.loginService.login(this.credentials);
	}
}