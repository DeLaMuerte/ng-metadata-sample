import {Inject, Injectable} from 'ng-metadata/core';
import {Uribuilder} from '../_vanilla/Uribuilder';
import {Todo} from './_models/Todo';

@Injectable('TodoApiService')
export class TodoApiService implements gs.IApiService {

	constructor(
		@Inject("$http") private $http: ng.IHttpService
	) {}

	public $search(params: {searchcriteria: {state: gs.TodoState}}): ng.IHttpPromise<any> {
		return this.$http({
			method: 'POST',
			url: Uribuilder.Instance.getRestUri('todo', 'search'),
			headers: {
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			withCredentials: true,
			data: {
				selector: {
					state: params.searchcriteria.state
				}
			}
		})
	}
}