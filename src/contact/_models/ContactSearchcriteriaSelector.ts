import * as angular from 'angular';
import {Record} from 'immutable';

let record = Record({
	$or: []
});

export class ContactSearchcriteriaSelector extends record implements gs.contact.IContactSearchcriteriaSelector {
	public $or: Array<{[field: string]: {$regex: string}}>;

	constructor(args: gs.contact.IContactSearchcriteriaSelector = {}) {
		let _args = angular.copy(args);
		super(_args);
	}

}