import {Component, Inject, OnInit} from 'ng-metadata/core';
import {Todo} from '../_models/Todo';
import {TodoService} from '../todo.service';

@Component({
	selector: 'gsc-todo-edit',
	template: require('./todo.edit.component.html')
})
export class TodoEditComponent implements OnInit {

	public todo: gs.todo.ITodo;

	constructor(
		@Inject('$routeParams') private $routeParams: ng.route.IRouteParamsService,
		@Inject('TodoService') private todoService: TodoService
	) {}

	public ngOnInit() {
		this.$read(this.$routeParams.id);
	}

	private $read(id: string) {
		this.todoService
			.$read(id)
			.subscribe((todo: Todo) => {
				this.todo = todo.toJS();
			});
	}

}