import * as Rx from 'rxjs';
import {Inject, Injectable} from 'ng-metadata/core';
import * as moment from 'moment';
import {Todo} from './_models/Todo';
import {Page} from '../_models/Page';
import {TodoApiService} from './todo.api.service';
import {TodoSearchcriteria} from './_models/TodoSearchcriteria';
import {CommonAlertService} from '../common/alert/common.alert.service';

@Injectable('todoService')
export class TodoService {

	constructor(
		private commonAlertService: CommonAlertService,
		private todoApiService: TodoApiService
	) {}

	public $search(searchcriteria: TodoSearchcriteria): Rx.Observable<Page<Todo>> {

		// transform the searchcriteria query to $or $regex for CouchDB
		let _searchcriteria: gs.todo.ITodoSearchcriteria = searchcriteria.toJS();
		_searchcriteria.selector.$or = [
			{
				title: {
					$regex: `(?i)${_searchcriteria.selector.query}`
				}
			},
			{
				description: {
					$regex: `(?i)${_searchcriteria.selector.query}`
				}
			}
		];
		delete _searchcriteria.selector.query;

		return Rx.Observable
			.fromPromise(this.todoApiService.$search(_searchcriteria))
			.map((response: ng.IHttpResponse<gs.IPage>): Page<Todo> => {
				return new Page<Todo>(response.data, Todo);
			}).do(null, (reason: ng.IHttpResponse<any>) => {
				this.commonAlertService.error('An error has occurred while performing search for todos', reason.data);
			});
	}

	public $create(todo: Todo): Rx.Observable<Todo> {
		return Rx.Observable
			.fromPromise(this.todoApiService.$create(<Todo>todo.set('createdAt', moment().toDate())))
			.flatMap((response: ng.IHttpResponse<gs.ICouchDbOperationResponse>) => {
				return this.$read(response.data.id);
			}).do(() => {
				this.commonAlertService.success('Todo created')
			}, (reason: ng.IHttpResponse<any>) => {
				this.commonAlertService.error('The todo could not been created', reason.data)
			});
	}

	public $read(id: string): Rx.Observable<Todo> {
		return Rx.Observable
			.fromPromise(this.todoApiService.$read(id))
			.map((response: ng.IHttpResponse<gs.todo.ITodo>): Todo => {
				return new Todo(response.data);
			}).do(null, (reason: ng.IHttpResponse<any>) => {
				this.commonAlertService.error('The todo could not been read', reason.data)
			});
	}

	public $update(todo: Todo): Rx.Observable<Todo> {
		return Rx.Observable
			.fromPromise(this.todoApiService.$update(<Todo>todo.set('modifiedAt', moment().toDate())))
			.flatMap((response: ng.IHttpResponse<gs.ICouchDbOperationResponse>) => {
				return this.$read(response.data.id)
			}).do(() => {
				this.commonAlertService.success('Todo saved')
			}, (reason: ng.IHttpResponse<any>) => {
				this.commonAlertService.error('The todo could not been saved', reason.data)
			});
	}

	public $delete(todo: Todo): Rx.Observable<gs.ICouchDbOperationResponse> {
		return Rx.Observable
			.fromPromise(this.todoApiService.$delete(todo))
			.map((response: ng.IHttpResponse<gs.ICouchDbOperationResponse>) => {
				return response.data;
			}).do(() => {
				this.commonAlertService.success('Todo deleted')
			}, (reason: ng.IHttpResponse<any>) => {
				this.commonAlertService.error('The todo could not been deleted', reason.data)
			});
	}
}