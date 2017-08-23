import {Component, Inject, OnInit} from 'ng-metadata/core';
import {Uribuilder} from '../_vanilla/Uribuilder';
import {LoginApiService} from '../login/login.api.service';

@Component({
	selector: 'gsc-header',
	template: require('./header.component.html')
})
export class HeaderComponent implements OnInit {

	public constructor(
		@Inject('$location') private $location: ng.ILocationService,
		@Inject('LoginApiService') private loginApiService: LoginApiService
	) {}

	public ngOnInit(): void {
		console.debug('HeaderComponent ngOnInit()');
	}

	public isActive(module: string): boolean {
		return module == Uribuilder.Instance.getModule(this.$location.path());
	}

	public logout(): void {
		this.loginApiService.$delete();
	}

}