import * as Rx from 'rxjs';
import {Injectable} from 'ng-metadata/core';
import {CommonAlertService} from '../common/alert/common.alert.service';
import {AdminApiService} from './admin.api.service';

@Injectable('adminService')
export class AdminService {

	constructor(
		private commonAlertService: CommonAlertService,
		private adminApiService: AdminApiService
	) {}

	public couchdb = new class AdminCouchdbService {

		constructor(
			private commonAlertService: CommonAlertService,
			private adminApiService: AdminApiService
		) {}

		public loadStatus(): Rx.Observable<any> {
			return Rx.Observable
				.fromPromise(this.adminApiService.couchdb.getStatus())
				.map((response: ng.IHttpResponse<any>): any => {
					return response.data;
				}, (reason: ng.IHttpResponse<any>) => {
					return reason.data;
				});
		}

		public loadDbInfo(uri: string): Rx.Observable<gs.ICouchDbInfo | gs.ICouchDbInfoError> {
			return Rx.Observable
				.fromPromise(this.adminApiService.couchdb.getDbInfo(uri))
				.map((response: ng.IHttpResponse<gs.ICouchDbInfo>) => {
					return response.data;
				})
				.catch((error: ng.IHttpResponse<gs.ICouchDbInfoError>) => {
					return Rx.Observable.throw(error.data);
				})
		}

	}(this.commonAlertService, this.adminApiService)
}