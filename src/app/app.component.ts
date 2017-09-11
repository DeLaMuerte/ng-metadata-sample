import {Component, Inject, OnInit} from 'ng-metadata/core';
import {Uribuilder} from '../_vanilla/Uribuilder';
import {LoginService} from '../login/login.service';
import {UserCtx} from '../login/_models/UserCtx';

@Component({
	selector: 'gsc-app',
	template: require('./app.component.html')
})
export class AppComponent implements OnInit {

	public isAuthenticated: boolean;

	public constructor(
		private loginService: LoginService
	) {}

	public ngOnInit(): void {
		this.subscribeToUserCtx();
		this.checkForAuthentication();
	}

	private subscribeToUserCtx() {
		this.loginService.userCtxObservable
			.subscribe((userCtx?: UserCtx) => {
				this.isAuthenticated = !!userCtx;
			});
	}

	private checkForAuthentication() {
		this.loginService.check();
	}

}