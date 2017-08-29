import * as angular from 'angular';
import {Record} from 'immutable';
import {TodoSearchcriteriaSelector} from './TodoSearchcriteriaSelector';

let record = Record({
	selector: new TodoSearchcriteriaSelector()
});

export class TodoSearchcriteria extends record implements gs.todo.ITodoSearchcriteria {
	public selector: TodoSearchcriteriaSelector;

	constructor(args: gs.todo.ITodoSearchcriteria = {}) {
		let _args = angular.copy(args);
		if (_args.selector) {
			_args.selector = new TodoSearchcriteriaSelector(_args.selector);
		}
		super(_args);
	}
}