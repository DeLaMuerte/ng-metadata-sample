import * as Rx from 'rxjs';
import {Inject, Injectable} from 'ng-metadata/core';
import {Uribuilder} from '../_vanilla/Uribuilder';
import {Todo} from './_models/Todo';
import {Page} from '../_models/Page';
import {TodoApiService} from './todo.api.service';

@Injectable('TodoService')
export class TodoService {

	constructor(
		@Inject('TodoApiService') private todoApiService: TodoApiService
	) {}

	public $search(params: {searchcriteria: {state: gs.TodoState}}): Rx.Observable<Page<Todo>> {
		return Rx.Observable
			.fromPromise(this.todoApiService.$search(params))
			.map((response: ng.IHttpPromiseCallbackArg<any>) => {
				return new Page<Todo>(response.data, Todo);
			})
	}
}