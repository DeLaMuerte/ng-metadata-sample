import * as Rx from 'rxjs';
import {Inject, Injectable} from 'ng-metadata/core';
import {LoginApiService} from './login.api.service';
import {CommonAlertService} from '../common/alert/common.alert.service';
import {UserCtx} from './_models/UserCtx';

@Injectable('loginService')
export class LoginService {

	public userCtxSubject: Rx.BehaviorSubject<UserCtx>;
	public userCtxObservable: Rx.Observable<UserCtx>;

	public constructor(
		private commonAlertService: CommonAlertService,
		private loginApiService: LoginApiService
	) {
		this.userCtxSubject = new Rx.BehaviorSubject<UserCtx>(null);
		this.userCtxObservable = this.userCtxSubject.asObservable().share();
	}

	public login(credentials: {name: string, password: string}): Rx.Subscription {
		return Rx.Observable
			.fromPromise(this.loginApiService.$create(credentials))
			.map((response: ng.IHttpResponse<gs.login.IUserCtx>) => {
				return new UserCtx(response.data);
			})
			.subscribe((userCtx: UserCtx) => {
				this.commonAlertService.success('Logged in');
				this.userCtxSubject.next(userCtx);
			}, (reason: ng.IHttpResponse<any>) => {
				this.commonAlertService.error('Login unsuccessful', reason.data);
				this.userCtxSubject.next(null);
			})
	}

	public logout(): Rx.Subscription {
		return Rx.Observable
			.fromPromise(this.loginApiService.$delete())
			.map((response: ng.IHttpResponse<any>) => {
				return response.data;
			})
			.subscribe(() => {
				this.commonAlertService.success('Logged out');
				this.userCtxSubject.next(null);
			}, (reason: ng.IHttpResponse<any>) => {
				this.commonAlertService.error('Logout unsuccessful', reason.data);
			})
	}

	public check(): Rx.Subscription {
		return Rx.Observable
			.fromPromise(this.loginApiService.$read())
			.map((response: ng.IHttpResponse<gs.login.ISession>) => {
				return response.data;
			})
			.subscribe((data: gs.login.ISession) => {
				if (!!data.info.authenticated) {
					this.userCtxSubject.next(new UserCtx(data.userCtx));
				} else {
					this.userCtxSubject.next(null);
				}
			}, (reason: ng.IHttpResponse<any>) => {
				this.userCtxSubject.next(null);
			})
	}

}