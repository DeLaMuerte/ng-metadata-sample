import {Inject, Injectable} from 'ng-metadata/core';
import {Uribuilder} from '../_vanilla/Uribuilder';

@Injectable('loginApiService')
export class LoginApiService implements gs.IApiService {

	constructor(
		@Inject("$http") private $http: ng.IHttpService
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
		});
	}

	public $delete(): ng.IHttpPromise<any> {
		return this.$http({
			method: 'DELETE',
			url: Uribuilder.Instance.getRestUri('login', 'delete'),
			withCredentials: true
		})
	}


}