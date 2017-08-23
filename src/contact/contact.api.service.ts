import {Inject, Injectable} from 'ng-metadata/core';
import {Uribuilder} from '../_vanilla/Uribuilder';

@Injectable('ContactApiService')
export class ContactApiService implements gs.IApiService {

	constructor(
		@Inject("$http") private $http: ng.IHttpService) {}

	public $list(): ng.IHttpPromise<any> {
		return this.$http({
			method: 'GET',
			url: Uribuilder.Instance.getRestUri('contact', 'list', null, {'include_docs': true}),
			headers: {
				'Accept': 'application/json'
			},
			withCredentials: true
		}).then((response: ng.IHttpPromiseCallbackArg<any>) => {
			response.data.rows = response.data.rows.map((row) => row.doc);
			return response;
		})
	}

	public $search(params: {searchcriteria: {query: string}}): ng.IHttpPromise<any> {
		return this.$http({
			method: 'POST',
			url: Uribuilder.Instance.getRestUri('contact', 'search'),
			headers: {
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			withCredentials: true,
			data: {
				selector: {
					$or: [
						{
							firstName: {
								$regex: `(?i)${params.searchcriteria.query}`
							}
						},
						{
							lastName: {
								$regex: `(?i)${params.searchcriteria.query}`
							}
						}
					]
				}
			}
		})
	}

}