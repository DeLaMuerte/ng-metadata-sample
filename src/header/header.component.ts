import {Component, Inject} from 'ng-metadata/core';
import {Uribuilder} from '../_vanilla/Uribuilder';
import {LoginService} from '../login/login.service';

@Component({
	selector: 'gsc-header',
	template: require('./header.component.html')
})
export class HeaderComponent {

	public constructor(
		@Inject('$location') private $location: ng.ILocationService,
		private loginService: LoginService
	) {}

	public isActive(module: string): boolean {
		return module == Uribuilder.Instance.getModule(this.$location.path());
	}

	public logout(): void {
		this.loginService.logout();
	}

}