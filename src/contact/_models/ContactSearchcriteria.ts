import * as angular from 'angular';
import {Record} from 'immutable';
import {ContactSearchcriteriaSelector} from './ContactSearchcriteriaSelector';

let record = Record({
	query: '',
	selector: new ContactSearchcriteriaSelector()
});

export class ContactSearchcriteria extends record implements gs.contact.IContactSearchcriteria {
	public query: string;
	public selector: ContactSearchcriteriaSelector;

	constructor(args: gs.contact.IContactSearchcriteria = {}) {
		let _args = angular.copy(args);
		_args.selector = new ContactSearchcriteriaSelector(_args.selector);
		super(_args);
	}
}