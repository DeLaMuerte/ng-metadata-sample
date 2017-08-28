import * as angular from 'angular';
import {Record} from 'immutable';

let record = Record({
	state: null
});

export class TodoSearchcriteriaSelector extends record implements gs.todo.ITodoSearchcriteriaSelector {
	public state: gs.todo.TodoState;

	constructor(args: gs.todo.ITodoSearchcriteriaSelector = {}) {
		let _args = angular.copy(args);
		super(_args);
	}
}