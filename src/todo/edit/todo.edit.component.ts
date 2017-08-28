import {Component, Inject, OnInit} from 'ng-metadata/core';
import {Todo} from '../_models/Todo';
import {TodoService} from '../todo.service';

@Component({
	selector: 'gsc-todo-edit',
	template: require('./todo.edit.component.html')
})
export class TodoEditComponent implements OnInit {

	public todoJs: gs.todo.ITodo;

	constructor(
		@Inject('$routeParams') private $routeParams: ng.route.IRouteParamsService,
		private todoService: TodoService
	) {}

	public ngOnInit(): void {
		this.$read(this.$routeParams.id);
	}

	private $read(id: string): void {
		this.todoService
			.$read(id)
			.subscribe((todo: Todo) => {
				this.todoJs = todo.toJS();
			});
	}

	public $update(): void {
		this.todoService
			.$update(new Todo(this.todoJs))
			.subscribe((updatedTodo: Todo) => {
				this.todoJs = updatedTodo.toJS();
			});
	}

}