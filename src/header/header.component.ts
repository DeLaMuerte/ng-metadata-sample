import {Component, Inject} from 'ng-metadata/core';
import {Uribuilder} from '../_vanilla/Uribuilder';
import {LoginApiService} from '../login/login.api.service';

@Component({
	selector: 'gsc-header',
	template: require('./header.component.html')
})
export class HeaderComponent {

	public constructor(
		@Inject('$location') private $location: ng.ILocationService,
		private loginApiService: LoginApiService
	) {}

	public isActive(module: string): boolean {
		return module == Uribuilder.Instance.getModule(this.$location.path());
	}

	public logout(): void {
		this.loginApiService.$delete();
	}

}