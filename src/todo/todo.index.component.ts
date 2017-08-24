import {Component, Inject, OnInit} from 'ng-metadata/core';
import {TodoService} from './todo.service';
import {Page} from '../_models/Page';
import {Todo} from './_models/Todo';

@Component({
	selector: 'gsc-todo',
	template: require('./todo.index.component.html')
})
export class TodoIndexComponent implements OnInit {

	constructor(
		@Inject('TodoService') private todoService: TodoService
	) {}

	public ngOnInit() {
		this.$search();
	}

	public $search() {
		this.todoService
			.$search({searchcriteria: {state: 'OPEN'}})
			.subscribe((todoPage: Page<Todo>) => {
				console.debug('todoPage:', todoPage);
				console.debug('todoPage.toJS():', todoPage.toJS());
			});
	}

}