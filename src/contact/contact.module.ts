import {NgModule} from 'ng-metadata/core';

import {ContactConfig} from './contact.config';
import {ContactApiService} from './contact.api.service';
import {ContactIndexComponent} from './contact.index.component';

@NgModule({
	providers: [
		ContactConfig,
		ContactApiService
	],
	declarations: [
		ContactIndexComponent
	]
})
export class ContactModule {}