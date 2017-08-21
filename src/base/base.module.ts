import {NgModule} from 'ng-metadata/core';
import {BaseMainComponent} from './base.main.component';
import {BaseConfig} from './base.config';

@NgModule({
	declarations: [BaseMainComponent],
	providers: [BaseConfig]
})
export class BaseModule {}