import {Component, Inject, OnInit} from 'ng-metadata/core';
import {Todo} from '../_models/Todo';
import {TodoService} from '../todo.service';

@Component({
	selector: 'gsc-todo-edit',
	template: require('./todo.edit.component.html')
})
export class TodoEditComponent implements OnInit {

	public todo: Todo;
	public todoJs: gs.todo.ITodo;

	constructor(
		@Inject('$stateParams') private $stateParams: ng.ui.IStateParamsService,
		private todoService: TodoService
	) {}

	public ngOnInit(): void {
		this.$read(this.$stateParams.id);
	}

	private $read(id: string): void {
		this.todoService
			.$read(id)
			.subscribe((todo: Todo) => {
				this.todo = todo;
				this.todoJs = this.todo.toJS();
			});
	}

	public $update(): void {
		this.todoService
			.$update(new Todo(this.todoJs))
			.subscribe((updatedTodo: Todo) => {
				this.todo = updatedTodo;
				this.todoJs = this.todo.toJS();
			});
	}

}