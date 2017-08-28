import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from 'ng-metadata/core';
import {TodoSearchcriteria} from '../_models/TodoSearchcriteria';
import {TodoSearchcriteriaSelector} from '../_models/TodoSearchcriteriaSelector';

@Component({
	selector: 'gsc-todo-searchcard',
	template: require('./todo.searchcard.component.html')
})
export class TodoSearchcardComponent implements OnChanges {

	@Input('gsSearchcriteria')
	public searchcriteria: TodoSearchcriteria;

	public selector: gs.todo.ITodoSearchcriteriaSelector;

	@Output('gsSearchFn')
	public searchFn: EventEmitter<gs.todo.ITodoSearchcriteria> = new EventEmitter<TodoSearchcriteria>();

	public ngOnChanges(changesObj: SimpleChanges): void {
		this.selector = changesObj.searchcriteria.currentValue.selector.toJS();
	}

	public $search(): void {
		this.searchFn.emit(<TodoSearchcriteria>this.searchcriteria.set('selector', new TodoSearchcriteriaSelector(this.selector)));
	}

}