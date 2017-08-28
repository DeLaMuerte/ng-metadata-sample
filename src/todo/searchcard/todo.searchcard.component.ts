import {Component, EventEmitter, OnInit, Output} from 'ng-metadata/core';
import {TodoSearchcriteria} from '../_models/TodoSearchcriteria';
import {GsLocalstorage} from '../../_vanilla/localstorage';

@Component({
	selector: 'gsc-todo-searchcard',
	template: require('./todo.searchcard.component.html')
})
export class TodoSearchcardComponent implements OnInit {

	public searchcriteria: gs.todo.ITodoSearchcriteria = new TodoSearchcriteria(GsLocalstorage.Instance.getStorage('GscTodoSearchcard_Searchcriteria')).toJS();

	@Output('gsSearchFn') public searchFn: EventEmitter<TodoSearchcriteria> = new EventEmitter<TodoSearchcriteria>();

	public ngOnInit() {
		this.$search();
	}

	public $search(): void {
		GsLocalstorage.Instance.setStorage('GscTodoSearchcard_Searchcriteria', this.searchcriteria);
		this.searchFn.emit(new TodoSearchcriteria(this.searchcriteria));
	}

}