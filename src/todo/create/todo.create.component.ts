import {Component, Inject, OnInit} from 'ng-metadata/core';
import {Todo} from '../_models/Todo';
import {TodoService} from '../todo.service';
import {Uribuilder} from '../../_vanilla/Uribuilder';

@Component({
	selector: 'gsc-todo-create',
	template: require('./todo.create.component.html')
})
export class TodoCreateComponent implements OnInit {

	public todoJs: gs.todo.ITodo;

	constructor(
		@Inject('$routeParams') private $routeParams: ng.route.IRouteParamsService,
		@Inject('$location') private $location: ng.ILocationService,
		private todoService: TodoService
	) {}

	public ngOnInit(): void {
		this.todoJs = new Todo().toJS();
	}

	public $create(): void {
		this.todoService
			.$create(new Todo(this.todoJs))
			.subscribe((createdTodo: Todo) => {
				this.$location.path(Uribuilder.Instance.getPath('todo', 'edit', createdTodo._id));
			});
	}

}