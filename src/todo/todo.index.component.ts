import {List} from 'immutable';
import {Component, Inject, OnInit} from 'ng-metadata/core';
import {TodoService} from './todo.service';
import {Page} from '../_models/Page';
import {Todo} from './_models/Todo';
import {TodoSearchcriteria} from './_models/TodoSearchcriteria';

@Component({
	selector: 'gsc-todo',
	template: require('./todo.index.component.html')
})
export class TodoIndexComponent {

	public todos: List<Todo>;

	constructor(
		@Inject('TodoService') private todoService: TodoService
	) {}

	public $search($event: TodoSearchcriteria) {
		this.todoService
			.$search($event)
			.subscribe((todoPage: Page<Todo>) => {
				this.todos = todoPage.docs;
			});
	}

}