import {Uribuilder} from '../_vanilla/Uribuilder';
import {GsLocalstorage} from '../_vanilla/localstorage';

export function TodoConfig($stateProvider: ng.ui.IStateProvider) {'ngInject';

	Uribuilder.Instance.setRestUris('todo', new Map<string, string>([
		['list',	'/todos/_all_docs'],
		['search',	'/todos/_find'],
		['create',	'/todos'],
		['read',	'/todos/%s'],
		['update',	'/todos/%s'],
		['delete',	'/todos/%s']
	]));

	GsLocalstorage.Instance.setVersionedKey('GscTodo_Searchcriteria', 'GscTodo_Searchcriteria_1');

	$stateProvider
		.state({
			name: 'todo',
			url: '/todo',
			component: 'gscTodo',
			redirectTo: 'todo.index'
		})
		.state({
			name: 'todo.index',
			url: '/index',
			component: 'gscTodoIndex'
		})
		.state({
			name: 'todo.create',
			url: '/create',
			component: 'gscTodoCreate'
		})
		.state({
			name: 'todo.edit',
			url: '/{id}',
			component: 'gscTodoEdit'
		});
}