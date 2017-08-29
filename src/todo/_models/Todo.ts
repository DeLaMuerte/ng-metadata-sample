import * as angular from 'angular';
import {Record} from 'immutable';
import * as moment from 'moment';

let record = Record({
	_id: undefined,
	_rev: undefined,
	_deleted: undefined,
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
	public _deleted: boolean;
	public title: string;
	public description: string;
	public state: gs.todo.TodoState;
	public createdAt: Date;
	public modifiedAt: Date;
	public openedAt: Date;
	public doneAt: Date;

	constructor(args: gs.todo.ITodo = {}) {
		let _args = angular.copy(args);
		if (_args.createdAt) {
			_args.createdAt = moment(_args.createdAt).toDate();
		}
		if (_args.modifiedAt) {
			_args.modifiedAt = moment(_args.modifiedAt).toDate();
		}
		if (_args.openedAt) {
			_args.openedAt = moment(_args.openedAt).milliseconds(0).toDate();
		}
		if (_args.doneAt) {
			_args.doneAt = moment(_args.doneAt).milliseconds(0).toDate();
		}
		super(_args);
	}

}