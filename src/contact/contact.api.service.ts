import {Inject, Injectable} from 'ng-metadata/core';
import {Uribuilder} from '../_vanilla/Uribuilder';

@Injectable('ContactApiService')
export class ContactApiService implements gs.IApiService {

	constructor(
		@Inject("$http") private $http: ng.IHttpService) {}

	public $search(): ng.IHttpPromise<any> {
		return this.$http({
			method: 'GET',
			url: Uribuilder.Instance.getRestUri('contact', 'search', null, {'include_docs': true})
		})
	}

}