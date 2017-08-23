import {Inject, Injectable} from 'ng-metadata/core';
import {Uribuilder} from '../_vanilla/Uribuilder';

@Injectable('LoginApiService')
export class LoginApiService implements gs.IApiService {

	constructor(
		@Inject("$http") private $http: ng.IHttpService,
		@Inject('$rootScope') private $rootScope: gs.IRootScopeService
	) {}

	public $create(credentials: {name: string, password: string}): ng.IHttpPromise<any> {
		return this.$http({
			method: 'POST',
			url: Uribuilder.Instance.getRestUri('login', 'create'),
			headers: {
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			data: credentials,
			withCredentials: true
		}).then((response) => {
			this.$rootScope.userIsLoggedIn = true;
			return response;
		}, (reason) => {
			this.$rootScope.userIsLoggedIn = false;
			return reason;
		})
	}

	public $read(): ng.IHttpPromise<any> {
		return this.$http({
			method: 'GET',
			url: Uribuilder.Instance.getRestUri('login', 'read'),
			headers: {
				'Accept': 'application/json'
			},
			withCredentials: true
		}).then((response: ng.IHttpPromiseCallbackArg<any>) => {
			this.$rootScope.userIsLoggedIn = !!response.data.userCtx.name;
			return response;
		}, ((reason) => {
			this.$rootScope.userIsLoggedIn = false;
			return reason;
		}));
	}

	public $delete(): ng.IHttpPromise<any> {
		return this.$http({
			method: 'DELETE',
			url: Uribuilder.Instance.getRestUri('login', 'delete'),
			withCredentials: true
		}).then((response) => {
			this.$rootScope.userIsLoggedIn = false;
			return response;
		})
	}


}