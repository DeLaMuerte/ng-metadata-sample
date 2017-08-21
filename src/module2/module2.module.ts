import {NgModule} from 'ng-metadata/core';
import {Module2MainComponent} from './module2.main.component';
import {Module2Config} from './module2.config';

@NgModule({
	declarations: [Module2MainComponent],
	providers: [Module2Config]
})
export class Module2Module {}