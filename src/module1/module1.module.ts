import {NgModule} from 'ng-metadata/core';
import {Module1MainComponent} from './module1.main.component';
import {Module1Config} from './module1.config';

@NgModule({
	declarations: [Module1MainComponent],
	providers: [Module1Config]
})
export class Module1Module {}