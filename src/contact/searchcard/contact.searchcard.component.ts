import {Component, EventEmitter, OnInit, Output} from 'ng-metadata/core';

@Component({
	selector: 'gsc-contact-searchcard',
	template: require('./contact.searchcard.component.html')
})
export class ContactSearchcardComponent implements OnInit {

	public searchcriteria: {query: string} = {
		query: ''
	};

	@Output('gsSearchFn') public searchFn: EventEmitter<{searchcriteria: {query: string}}> = new EventEmitter<{searchcriteria: {query: string}}>();

	public ngOnInit() {
		this.$search();
	}

	public $search(): void {
		console.debug('$search()');
		console.debug('searchcriteria:', this.searchcriteria);
		this.searchFn.emit({searchcriteria: this.searchcriteria});
	}

}