import * as Rx from 'rxjs';
import {Inject, Injectable} from 'ng-metadata/core';
import {Contact} from './_models/Contact';
import {Page} from '../_models/Page';
import {ContactApiService} from './contact.api.service';
import {ContactSearchcriteria} from './_models/ContactSearchcriteria';

@Injectable('ContactService')
export class ContactService {

	constructor(
		@Inject('ContactApiService') private contactApiService: ContactApiService
	) {}

	public $search(searchcriteria: ContactSearchcriteria): Rx.Observable<Page<Contact>> {

		// transform the searchcriteria query to $or $regex for CouchDB
		let _searchcriteria: gs.contact.IContactSearchcriteria = searchcriteria.toJS();
		_searchcriteria.selector.$or = [
			{
				firstName: {
					$regex: `(?i)${_searchcriteria.query}`
				}
			},
			{
				lastName: {
					$regex: `(?i)${_searchcriteria.query}`
				}
			}
		];
		delete _searchcriteria.query;

		return Rx.Observable
			.fromPromise(this.contactApiService.$search(_searchcriteria))
			.map((response: ng.IHttpPromiseCallbackArg<any>): Page<Contact> => {
				return new Page<Contact>(response.data, Contact);
			});
	}
}