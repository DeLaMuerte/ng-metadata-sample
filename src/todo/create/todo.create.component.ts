import {Component, Inject, OnInit} from 'ng-metadata/core';
import moment = require('moment');
import {Todo} from '../_models/Todo';
import {TodoService} from '../todo.service';
import {Uribuilder} from '../../_vanilla/Uribuilder';

@Component({
	selector: 'gsc-todo-create',
	template: require('./todo.create.component.html')
})
export class TodoCreateComponent implements OnInit {

	public todo: Todo;
	public todoJs: gs.todo.ITodo;

	constructor(
		@Inject('$routeParams') private $routeParams: ng.route.IRouteParamsService,
		@Inject('$location') private $location: ng.ILocationService,
		private todoService: TodoService
	) {}

	public ngOnInit(): void {
		this.todo = <Todo>new Todo()
			.set('state', 'OPEN')
			.set('openedAt', moment().milliseconds(0).toDate());
		this.todoJs = this.todo.toJS();
	}

	public $create(): void {
		this.todoService
			.$create(new Todo(this.todoJs))
			.subscribe((createdTodo: Todo) => {
				this.$location.path(Uribuilder.Instance.getPath('todo', 'edit', createdTodo._id));
			});
	}

}