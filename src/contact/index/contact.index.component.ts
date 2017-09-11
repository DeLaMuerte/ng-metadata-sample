import {Component, Inject} from 'ng-metadata/core';
import {ContactSearchcriteria} from '../_models/ContactSearchcriteria';
import {ContactService} from '../contact.service';
import {Contact} from '../_models/Contact';
import {Page} from '../../_models/Page';
import {List} from 'immutable';

@Component({
	selector: 'gsc-contact-index',
	template: require('./contact.index.component.html')
})
export class ContactIndexComponent {

	public contacts: List<Contact>;

	constructor(
		private contactService: ContactService
	) {}

	public $search($event: ContactSearchcriteria) {
		this.contactService
			.$search($event)
			.subscribe((contactPage: Page<Contact>) => {
				this.contacts = contactPage.docs;
			});
	}

}