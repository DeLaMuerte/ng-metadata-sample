import {Inject, Injectable} from 'ng-metadata/core';
import {Uribuilder} from '../_vanilla/Uribuilder';

@Injectable('adminApiService')
export class AdminApiService {

	constructor(
		@Inject("$http") private $http: ng.IHttpService
	) {}

	public couchdb = new class AdminCouchdbApiService {

		constructor(
			private $http: ng.IHttpService
		) {}

		public getStatus(): ng.IHttpPromise<any> {
			return this.$http({
				method: 'GET',
				url: Uribuilder.Instance.getRestUri('admin.couchdb', 'status'),
				headers: {
					'Accept': 'application/json'
				},
				withCredentials: true,
			});
		}

		public getDbInfo(uri: string): ng.IHttpPromise<gs.ICouchDbInfo | gs.ICouchDbInfoError> {
			return this.$http({
				method: 'GET',
				url: uri,
				headers: {
					'Accept': 'application/json'
				},
				withCredentials: true,
			});
		}

	}(this.$http);



}