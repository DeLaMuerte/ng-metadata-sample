import {Component, Inject, OnInit} from 'ng-metadata/core';
import {Todo} from '../_models/Todo';
import {TodoService} from '../todo.service';

@Component({
	selector: 'gsc-todo-view',
	template: require('./todo.view.component.html')
})
export class TodoViewComponent implements OnInit {

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
				console.debug('todo:', this.todo);
			});
	}

}