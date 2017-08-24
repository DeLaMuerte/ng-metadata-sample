import {NgModule} from 'ng-metadata/core';

import {TodoConfig} from './todo.config';
import {TodoIndexComponent} from './todo.index.component';
import {TodoApiService} from './todo.api.service';
import {TodoService} from './todo.service';

@NgModule({
	providers: [
		TodoConfig,
		TodoApiService,
		TodoService
	],
	declarations: [
		TodoIndexComponent
	]
})
export class TodoModule {}