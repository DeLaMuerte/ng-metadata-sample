import * as angular from 'angular';
import {Record} from 'immutable';

let defaultValues = {
	_id: null,
	_rev: null,
	_deleted: null,
	firstName: null,
	lastName: null
};

let record = Record(defaultValues);

export class Contact extends record implements gs.contact.IContact {
	public _id?: string;
	public _rev?: string;
	public _deleted?: boolean;
	public firstName: string;
	public lastName: string;

	constructor(args: gs.contact.IContact = defaultValues) {
		let _args = angular.copy(args);
		super(_args);
	}

}