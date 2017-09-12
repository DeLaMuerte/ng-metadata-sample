import {Component, OnInit} from 'ng-metadata/core';
import {AdminService} from '../admin.service';
import {Uribuilder} from '../../_vanilla/Uribuilder';

@Component({
	selector: 'gsc-admin-couchdb',
	template: require('./admin.couchdb.component.html')
})
export class AdminCouchdbComponent implements OnInit {

	public couchdbStatus: string;

	public dbs: Array<{name: string, uri: string, info: gs.ICouchDbInfo, error: gs.ICouchDbInfoError | gs.ICouchDbInfoError}> = [
		{
			name: 'contacts',
			uri: Uribuilder.Instance.getRestUri('contact', 'info'),
			info: undefined,
			error: undefined
		},
		{
			name: 'todos',
			uri: Uribuilder.Instance.getRestUri('todo', 'info'),
			info: undefined,
			error: undefined
		},
		{
			name: 'foo',
			uri: 'http://gregor.local:5984/foo',
			info: undefined,
			error: undefined
		}
	];

	constructor(
		private adminService: AdminService
	) {}

	public ngOnInit() {
		console.debug('AdminCouchdbComponent ngOnInit()');
		this.loadStatus();
	}

	private loadStatus(): void {
		this.adminService.couchdb
			.loadStatus()
			.subscribe((couchdbStatus: any) => {
				this.couchdbStatus = JSON.stringify(couchdbStatus, null, '  ');
				this.loadDbInfos();
			})
	}

	private loadDbInfos(): void {
		this.dbs.forEach((db) => {
			this.adminService.couchdb
				.loadDbInfo(db.uri)
				.subscribe((info: gs.ICouchDbInfo) => {
					db.info = info;
				}, (error: gs.ICouchDbInfoError) => {
					db.error = error;
				});
		})
	}



}