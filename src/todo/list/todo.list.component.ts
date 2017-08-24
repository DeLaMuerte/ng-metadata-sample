import {List} from 'immutable';
import {Component, Input, OnChanges, SimpleChange, SimpleChanges} from 'ng-metadata/core';
import {Todo} from '../_models/Todo';

@Component({
	selector: 'gsc-todo-list',
	template: require('./todo.list.component.html')
})
export class TodoListComponent implements OnChanges {

	public todos: Array<Todo>;

	@Input('gsTodos') private todosImmutableList: List<Todo>;

	public ngOnChanges(changesObj: {todosImmutableList: SimpleChange}) {
		if (changesObj.todosImmutableList.currentValue) {
			this.todos = changesObj.todosImmutableList.currentValue.toArray();
		}
	}

}