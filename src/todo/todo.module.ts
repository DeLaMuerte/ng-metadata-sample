import {NgModule} from 'ng-metadata/core';

import {TodoConfig} from './todo.config';
import {TodoIndexComponent} from './todo.index.component';
import {TodoApiService} from './todo.api.service';
import {TodoService} from './todo.service';
import {TodoListComponent} from './list/todo.list.component';

import {TodoSearchcardComponent} from './searchcard/todo.searchcard.component';
import {TodoViewComponent} from './view/todo.view.component';
@NgModule({
	providers: [
		TodoConfig,
		TodoApiService,
		TodoService
	],
	declarations: [
		TodoIndexComponent,
		TodoListComponent,
		TodoSearchcardComponent,
		TodoViewComponent
	]
})
export class TodoModule {}