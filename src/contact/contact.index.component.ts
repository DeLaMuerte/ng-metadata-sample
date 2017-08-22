import {Component, Inject, OnInit} from 'ng-metadata/core';
import {ContactApiService} from './contact.api.service';

@Component({
	selector: 'gsc-contact',
	template: require('./contact.index.component.html')
})
export class ContactIndexComponent implements OnInit {

	private contactsPage: any;

	constructor(
		@Inject('ContactApiService') private contactApiService: ContactApiService) {}

	public ngOnInit(): void {
		console.debug('ContactIndexComponent ngOnInit()');
	}

	public $search() {
		console.debug('$search()');

		this.contactApiService
			.$search()
			.then((response) => {
				console.debug(response.data);
				this.contactsPage = response.data;
			});
	}

}