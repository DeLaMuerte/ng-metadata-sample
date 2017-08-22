import {NgModule} from 'ng-metadata/core';

import {Module2Run} from './module2.run';
import {Module2Config} from './module2.config';
import {Module2IndexComponent} from './module2.index.component';

@NgModule({
	providers: [
		Module2Run,
		Module2Config
	],
	declarations: [
		Module2IndexComponent
	]
})
export class Module2Module {}