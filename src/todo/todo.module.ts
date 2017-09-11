import {NgModule} from 'ng-metadata/core';

import {TodoConfig} from './todo.config';
import {TodoApiService} from './todo.api.service';
import {TodoService} from './todo.service';
import {TodoCreateComponent} from './create/todo.create.component';
import {TodoEditComponent} from './edit/todo.edit.component';
import {TodoComponent} from './todo.component';
import {TodoListComponent} from './list/todo.list.component';
import {TodoSearchcardComponent} from './searchcard/todo.searchcard.component';
import {TodoFormComponent} from './form/todo.form.component';
import {TodoIndexComponent} from './index/todo.index.component';

@NgModule({
	providers: [
		TodoConfig,
		TodoApiService,
		TodoService
	],
	declarations: [
		TodoComponent,
		TodoIndexComponent,
		TodoCreateComponent,
		TodoEditComponent,
		TodoFormComponent,
		TodoListComponent,
		TodoSearchcardComponent
	]
})
export class TodoModule {}