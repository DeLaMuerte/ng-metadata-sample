import * as angular from 'angular';
import {Record} from 'immutable';

let record = Record({
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

export class Todo extends record implements gs.todo.ITodo {
	public _id: string;
	public _rev: string;
	public title: string;
	public description: string;
	public state: gs.todo.TodoState;
	public createdAt: gs.IDatetimeISOString;
	public modifiedAt: gs.IDatetimeISOString;
	public openedAt: gs.IDatetimeISOString;
	public doneAt: gs.IDatetimeISOString;

	constructor(args: gs.todo.ITodo = {}) {
		let _args = angular.copy(args);
		super(_args);
	}

}