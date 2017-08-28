import {List} from 'immutable';
import {Component, OnInit} from 'ng-metadata/core';
import {TodoService} from './todo.service';
import {Page} from '../_models/Page';
import {Todo} from './_models/Todo';
import {TodoSearchcriteria} from './_models/TodoSearchcriteria';
import {GsLocalstorage} from '../_vanilla/localstorage';

@Component({
	selector: 'gsc-todo',
	template: require('./todo.index.component.html')
})
export class TodoIndexComponent implements OnInit {

	public todos: List<Todo>;

	public searchcriteria: TodoSearchcriteria = new TodoSearchcriteria(GsLocalstorage.Instance.getStorage('GscTodo_Searchcriteria'));

	constructor(
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
		this.todoService
			.$delete($event)
			.subscribe((couchDbOperationResponse: gs.ICouchDbOperationResponse) => {
				this.todos = this.todos
					.delete(this.todos
						.findIndex((todo) => todo._id == couchDbOperationResponse.id));
			})
	}

}