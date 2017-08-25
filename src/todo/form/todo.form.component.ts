import {Component, Input, OnInit} from 'ng-metadata/core';

@Component({
	selector: 'gsc-todo-form',
	template: require('./todo.form.component.html')
})
export class TodoFormComponent implements OnInit {

	@Input('gsTodoJs') public todoJs: gs.todo.ITodo;

	public FormCtrl: ng.IFormController;

	constructor() {
		console.debug('TodoFormComponent constructor');
	}

	public ngOnInit() {
		console.debug('TodoFormComponent ngOnInit()');
	}

}