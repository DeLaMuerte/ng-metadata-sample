import {Component, EventEmitter, OnInit, Output} from 'ng-metadata/core';
import {ContactSearchcriteria} from '../_models/ContactSearchcriteria';
import {Contact} from '../_models/Contact';

@Component({
	selector: 'gsc-contact-searchcard',
	template: require('./contact.searchcard.component.html')
})
export class ContactSearchcardComponent implements OnInit {

	public searchcriteria: gs.contact.IContactSearchcriteria = new ContactSearchcriteria().toJS();

	@Output('gsSearchFn') public searchFn: EventEmitter<ContactSearchcriteria> = new EventEmitter<ContactSearchcriteria>();

	public ngOnInit() {
		this.$search();
	}

	public $search(): void {
		this.searchFn.emit(new ContactSearchcriteria(this.searchcriteria));
	}

}