import {List} from 'immutable';
import {Component, Input} from 'ng-metadata/core';
import {Todo} from '../_models/Todo';

@Component({
	selector: 'gsc-todo-list',
	template: require('./todo.list.component.html')
})
export class TodoListComponent {

	@Input('gsTodos') private todos: List<Todo> = List<Todo>([]);

}