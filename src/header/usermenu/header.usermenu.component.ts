import {Component} from 'ng-metadata/core';
import {LoginService} from '../../login/login.service';

@Component({
	selector: 'gsc-header-usermenu',
	template: require('./header.usermenu.component.html')
})
export class HeaderUsermenuComponent {

	public constructor(
		private loginService: LoginService
	) {}

	public logout(): void {
		this.loginService.logout();
	}
}