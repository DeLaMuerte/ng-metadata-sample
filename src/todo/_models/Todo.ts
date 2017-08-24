import * as angular from 'angular';
import * as Immutable from 'immutable';

let record = Immutable.Record({
	_id: null,
	_rev: null,
	title: null,
	description: null,
	state: 'OPEN',
	createdAt: null,
	modifiedAt: null,
	openedAt: null,
	doneAt: null
});

export class Todo extends record implements gs.ITodo {
	_id: string;
	_rev: string;
	title: string;
	description: string;
	state: gs.TodoState;
	createdAt: gs.IDatetimeISOString;
	modifiedAt: gs.IDatetimeISOString;
	openedAt: gs.IDatetimeISOString;
	doneAt: gs.IDatetimeISOString;

	constructor(args: gs.ITodo = {}) {
		let _args = angular.copy(args);
		super(_args);
	}

}