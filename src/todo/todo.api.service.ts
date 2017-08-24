import {Inject, Injectable} from 'ng-metadata/core';
import {Uribuilder} from '../_vanilla/Uribuilder';
import {Todo} from './_models/Todo';
import {TodoSearchcriteria} from './_models/TodoSearchcriteria';
import {compact} from '../_vanilla/functions';

@Injectable('TodoApiService')
export class TodoApiService implements gs.IApiService {

	constructor(
		@Inject("$http") private $http: ng.IHttpService
	) {}

	public $search(searchcriteria: TodoSearchcriteria): ng.IHttpPromise<any> {
		return this.$http({
			method: 'POST',
			url: Uribuilder.Instance.getRestUri('todo', 'search'),
			headers: {
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			withCredentials: true,
			data: searchcriteria.update('selector', (selector) => {
				return compact(selector);
			})
		})
	}
}