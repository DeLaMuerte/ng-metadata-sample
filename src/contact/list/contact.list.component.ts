import {Component, Input} from 'ng-metadata/core';

@Component({
	selector: 'gsc-contact-list',
	template: require('./contact.list.component.html')
})
export class ContactListComponent {

	@Input('gsContacts') public contacts: any;

}