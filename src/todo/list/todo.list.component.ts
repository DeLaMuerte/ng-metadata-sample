import {List} from 'immutable';
import {Component, EventEmitter, Input, Output} from 'ng-metadata/core';
import {Todo} from '../_models/Todo';

@Component({
	selector: 'gsc-todo-list',
	template: require('./todo.list.component.html')
})
export class TodoListComponent {

	@Input('gsTodos')
	public todos: List<Todo>;

	@Output('gsDeleteFn')
	public deleteFn: EventEmitter<Todo> = new EventEmitter<Todo>();

	@Output('gsToggleStateFn')
	public toggleStateFn: EventEmitter<Todo> = new EventEmitter<Todo>();

}