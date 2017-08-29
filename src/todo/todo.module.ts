import {NgModule} from 'ng-metadata/core';

import {TodoConfig} from './todo.config';
import {TodoApiService} from './todo.api.service';
import {TodoService} from './todo.service';
import {TodoCreateComponent} from './create/todo.create.component';
import {TodoEditComponent} from './edit/todo.edit.component';
import {TodoIndexComponent} from './todo.index.component';
import {TodoListComponent} from './list/todo.list.component';
import {TodoSearchcardComponent} from './searchcard/todo.searchcard.component';
import {TodoFormComponent} from './form/todo.form.component';

@NgModule({
	providers: [
		TodoConfig,
		TodoApiService,
		TodoService
	],
	declarations: [
		TodoCreateComponent,
		TodoEditComponent,
		TodoFormComponent,
		TodoIndexComponent,
		TodoListComponent,
		TodoSearchcardComponent
	]
})
export class TodoModule {}