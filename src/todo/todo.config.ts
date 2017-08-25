import {Uribuilder} from '../_vanilla/Uribuilder';
import {GsLocalstorage} from '../_vanilla/localstorage';

export function TodoConfig($routeProvider: ng.route.IRouteProvider) {'ngInject';

	Uribuilder.Instance.setPaths('todo', new Map<string, string>([
		['index',	'/todo'],
		['create',	'/todo/create'],
		['edit',	'/todo/%s']
	]));

	Uribuilder.Instance.setRestUris('todo', new Map<string, string>([
		['list',	'/todos/_all_docs'],
		['search',	'/todos/_find'],
		['create',	'/todos'],
		['read',	'/todos/%s'],
		['update',	'/todos/%s'],
		['delete',	'/todos/%s']
	]));

	GsLocalstorage.Instance.setVersionedKey('GscTodoSearchcard_Searchcriteria', 'GscTodoSearchcard_Searchcriteria_0');

	$routeProvider.when(Uribuilder.Instance.getPath('todo', 'index'), {
		template: '<gsc-todo></gsc-todo>'
	});

	$routeProvider.when(Uribuilder.Instance.getPath('todo', 'create'), {
		template: '<gsc-todo-create></gsc-todo-create>'
	});

	$routeProvider.when(Uribuilder.Instance.getPath('todo', 'edit', ':id'), {
		template: '<gsc-todo-edit></gsc-todo-edit>'
	});
}