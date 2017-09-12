import {Component, OnInit} from 'ng-metadata/core';
import {AdminService} from '../admin.service';

@Component({
	selector: 'gsc-admin-couchdb',
	template: require('./admin.couchdb.component.html')
})
export class AdminCouchdbComponent implements OnInit {

	public couchdbStatus: string;

	constructor(
		private adminService: AdminService
	) {}

	public ngOnInit() {
		console.debug('AdminCouchdbComponent ngOnInit()');
		this.loadStatus();
	}

	private loadStatus(): void {
		this.adminService.couchdb.loadStatus().subscribe((couchdbStatus: any) => {
			this.couchdbStatus = JSON.stringify(couchdbStatus, null, '  ');
		})
	}

}