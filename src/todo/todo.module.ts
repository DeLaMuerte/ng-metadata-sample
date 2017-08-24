import {NgModule} from 'ng-metadata/core';

import {TodoRun} from './todo.run';
import {TodoConfig} from './todo.config';
import {TodoIndexComponent} from './todo.index.component';

@NgModule({
	providers: [
		TodoRun,
		TodoConfig
	],
	declarations: [
		TodoIndexComponent
	]
})
export class TodoModule {}