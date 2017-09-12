import {NgModule} from 'ng-metadata/core';
import {AdminConfig} from './admin.config';
import {AdminComponent} from './admin.component';
import {AdminCouchdbComponent} from './couchdb/admin.couchdb.component';
import {AdminTab2Component} from './tab2/admin.tab2.component';
import {AdminTab3Component} from './tab3/admin.tab3.component';
import {AdminTab4Component} from './tab4/admin.tab4.component';
import {AdminService} from './admin.service';
import {AdminApiService} from './admin.api.service';

@NgModule({
	providers: [
		AdminConfig,
		AdminService,
		AdminApiService
	],
	declarations: [
		AdminComponent,
		AdminCouchdbComponent,
		AdminTab2Component,
		AdminTab3Component,
		AdminTab4Component
	]
})
export class AdminModule {}