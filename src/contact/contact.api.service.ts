import {Inject, Injectable} from 'ng-metadata/core';
import {Uribuilder} from '../_vanilla/Uribuilder';
import {compact} from '../_vanilla/functions';

@Injectable('contactApiService')
export class ContactApiService implements gs.IApiService {

	constructor(
		@Inject("$http") private $http: ng.IHttpService
	) {}

	public $search(searchcriteria: gs.contact.IContactSearchcriteria): ng.IHttpPromise<gs.IPage> {
		return this.$http({
			method: 'POST',
			url: Uribuilder.Instance.getRestUri('contact', 'search'),
			headers: {
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			withCredentials: true,
			data: compact(searchcriteria)
		});
	}

}