import * as Rx from 'rxjs';
import {Injectable} from 'ng-metadata/core';
import {Contact} from './_models/Contact';
import {Page} from '../_models/Page';
import {ContactApiService} from './contact.api.service';
import {ContactSearchcriteria} from './_models/ContactSearchcriteria';
import {CommonAlertService} from '../common/alert/common.alert.service';

@Injectable('contactService')
export class ContactService {

	constructor(
		private commonAlertService: CommonAlertService,
		private contactApiService: ContactApiService
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
			.map((response: ng.IHttpResponse<gs.IPage>): Page<Contact> => {
				return new Page<Contact>(response.data, Contact);
			}).do(null, (reason: ng.IHttpResponse<any>) => {
				this.commonAlertService.error('An error has occurred while performing search for contacts', reason.data);
			});
	}
}