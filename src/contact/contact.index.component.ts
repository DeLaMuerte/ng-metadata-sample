import {Component, Inject, OnInit} from 'ng-metadata/core';
import {ContactApiService} from './contact.api.service';

@Component({
	selector: 'gsc-contact',
	template: require('./contact.index.component.html')
})
export class ContactIndexComponent {

	public contacts: Array<any>;

	constructor(
		@Inject('ContactApiService') private contactApiService: ContactApiService) {}

	public $search($event: {searchcriteria: {query: string}}) {
		this.contactApiService
			.$search($event)
			.then((response: ng.IHttpPromiseCallbackArg<any>) => {
				this.contacts = response.data.docs;
			});
	}

}