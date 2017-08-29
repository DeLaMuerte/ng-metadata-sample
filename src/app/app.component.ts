import {Component, Inject, OnInit} from 'ng-metadata/core';
import {Uribuilder} from '../_vanilla/Uribuilder';
import {LoginApiService} from '../login/login.api.service';

@Component({
	selector: 'gsc-app',
	template: require('./app.component.html')
})
export class AppComponent implements OnInit {

	public constructor(
		@Inject('$rootScope') private $rootScope: gs.IRootScopeService,
		private loginApiService: LoginApiService) {
			this.$rootScope.Uribuilder = Uribuilder.Instance;
		}

	public ngOnInit(): void {
		this.checkForAuthentication();
	}

	private checkForAuthentication() {
		this.loginApiService.$read();
	}

}