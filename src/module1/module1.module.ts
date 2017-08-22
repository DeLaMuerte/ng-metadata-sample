import {NgModule} from 'ng-metadata/core';

import {Module1Run} from './module1.run';
import {Module1Config} from './module1.config';
import {Module1IndexComponent} from './module1.index.component';

@NgModule({
	providers: [
		Module1Run,
		Module1Config
	],
	declarations: [
		Module1IndexComponent
	]
})
export class Module1Module {}