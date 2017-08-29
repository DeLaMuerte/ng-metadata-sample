import {Component, Input} from 'ng-metadata/core';
import moment = require('moment');

@Component({
	selector: 'gsc-todo-form',
	template: require('./todo.form.component.html')
})
export class TodoFormComponent {

	@Input('gsTodoJs') public todoJs: gs.todo.ITodo;

	public FormCtrl: ng.IFormController;

	public onSelectState(state: gs.todo.TodoState) {
		console.debug('onSelectState(state)', state);
		switch (state) {
			case 'OPEN':
				this.todoJs.openedAt = moment().milliseconds(0).toDate();
				break;
			case 'DONE':
				this.todoJs.doneAt = moment().milliseconds(0).toDate();
				break;
		}
	}

}