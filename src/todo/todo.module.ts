import {NgModule} from 'ng-metadata/core';

import {TodoConfig} from './todo.config';
import {TodoApiService} from './todo.api.service';
import {TodoService} from './todo.service';
import {TodoEditComponent} from './edit/todo.edit.component';
import {TodoIndexComponent} from './todo.index.component';
import {TodoListComponent} from './list/todo.list.component';
import {TodoSearchcardComponent} from './searchcard/todo.searchcard.component';

@NgModule({
	providers: [
		TodoConfig,
		TodoApiService,
		TodoService
	],
	declarations: [
		TodoEditComponent,
		TodoIndexComponent,
		TodoListComponent,
		TodoSearchcardComponent
	]
})
export class TodoModule {}