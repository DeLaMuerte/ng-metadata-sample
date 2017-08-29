import {Component, Input} from 'ng-metadata/core';
import {List} from 'immutable';
import {Contact} from '../_models/Contact';

@Component({
	selector: 'gsc-contact-list',
	template: require('./contact.list.component.html')
})
export class ContactListComponent {

	@Input('gsContacts') public contacts: List<Contact> = List<Contact>();

}