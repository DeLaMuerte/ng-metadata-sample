import * as Rx from 'rxjs';
import {Inject, Injectable} from 'ng-metadata/core';
import {Todo} from './_models/Todo';
import {Page} from '../_models/Page';
import {TodoApiService} from './todo.api.service';
import {TodoSearchcriteria} from './_models/TodoSearchcriteria';

@Injectable('TodoService')
export class TodoService {

	constructor(
		@Inject('TodoApiService') private todoApiService: TodoApiService
	) {}

	public $search(searchcriteria: TodoSearchcriteria): Rx.Observable<Page<Todo>> {
		return Rx.Observable
			.fromPromise(this.todoApiService.$search(searchcriteria))
			.map((response: ng.IHttpPromiseCallbackArg<any>): Page<Todo> => {
				return new Page<Todo>(response.data, Todo);
			})
	}

	public $create(todo: Todo): Rx.Observable<Todo> {
		return Rx.Observable
			.fromPromise(this.todoApiService.$create(<Todo>todo.set('_id', undefined).set('_rev', undefined)))
			.flatMap((response: ng.IHttpPromiseCallbackArg<gs.ICouchDbOperationResponse>) => {
				return this.$read(response.data.id);
			})
	}

	public $read(id: string): Rx.Observable<Todo> {
		return Rx.Observable
			.fromPromise(this.todoApiService.$read(id))
			.map((response: ng.IHttpPromiseCallbackArg<gs.todo.ITodo>): Todo => {
				return new Todo(response.data);
			})
	}

	public $update(todo: Todo): Rx.Observable<Todo> {
		return Rx.Observable
			.fromPromise(this.todoApiService.$update(todo))
			.flatMap((response: ng.IHttpPromiseCallbackArg<gs.ICouchDbOperationResponse>) => {
				return this.$read(response.data.id)
			});
	}
}