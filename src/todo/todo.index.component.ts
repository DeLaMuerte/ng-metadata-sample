import {List} from 'immutable';
import {Component, Inject, OnInit} from 'ng-metadata/core';
import {TodoService} from './todo.service';
import {Page} from '../_models/Page';
import {Todo} from './_models/Todo';
import {TodoSearchcriteria} from './_models/TodoSearchcriteria';
import {GsLocalstorage} from '../_vanilla/localstorage';
import moment = require('moment');

@Component({
	selector: 'gsc-todo',
	template: require('./todo.index.component.html')
})
export class TodoIndexComponent implements OnInit {

	public todos: List<Todo>;

	public searchcriteria: TodoSearchcriteria = new TodoSearchcriteria(GsLocalstorage.Instance.getStorage('GscTodo_Searchcriteria'));

	constructor(
		@Inject('$window') private $window: ng.IWindowService,
		private todoService: TodoService
	) {}

	public ngOnInit(): void {
		this.$search(this.searchcriteria);
	}

	public $search($event: TodoSearchcriteria): void {
		this.searchcriteria = $event;
		GsLocalstorage.Instance.setStorage('GscTodo_Searchcriteria', this.searchcriteria.toJS());
		this.todoService
			.$search($event)
			.subscribe((todoPage: Page<Todo>) => {
				this.todos = todoPage.docs;
			});
	}

	public $delete($event: Todo): void {
		if (this.$window.confirm('Delete todo?')) {
			this.todoService
				.$delete($event)
				.subscribe((couchDbOperationResponse: gs.ICouchDbOperationResponse) => {
					this.todos = this.todos
						.delete(this.todos
							.findIndex((todo) => todo._id == couchDbOperationResponse.id));
				})
		}
	}

	public toggleState($event: Todo): void {
		this.todoService
			.$read($event._id)
			.subscribe((todo: Todo) => {

				switch ($event.state) {
					case 'OPEN':
						todo = <Todo>todo
							.set('state', 'DONE')
							.set('doneAt', moment().milliseconds(0).toDate());
						break;
					case 'DONE':
						todo = <Todo>todo
							.set('state', 'OPEN')
							.set('openedAt', moment().milliseconds(0).toDate());
						break;
				}

				this.todoService
					.$update(todo)
					.subscribe((updatedTodo: Todo) => {
						let idx = this.todos.findIndex((t) => t._id == updatedTodo._id);
						if (idx != -1) {
							this.todos = this.todos
								.set(idx, updatedTodo);
						}
					})
			})
	}

}