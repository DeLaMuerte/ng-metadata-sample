import * as angular from 'angular';
import {Record} from 'immutable';

let record = Record({
	selector: {
		state: null
	}
});

export class TodoSearchcriteria extends record implements gs.todo.ITodoSearchcriteria {
	public selector: {
		state: gs.todo.TodoState
	};

	constructor(args: gs.todo.ITodoSearchcriteria = {}) {
		let _args = angular.copy(args);
		if (!_args.selector) {
			_args.selector = {
				state: null
			}
		}
		super(_args);
	}
}