import {Uribuilder} from '../_vanilla/Uribuilder';

export function TodoConfig($routeProvider: ng.route.IRouteProvider) {'ngInject';

	Uribuilder.Instance.setPaths('todo', new Map<string, string>([
		['index',	'/todo'],
		['create',	'/todo/create'],
		['view',	'/todo/%s']
	]));

	Uribuilder.Instance.setRestUris('todo', new Map<string, string>([
		['list',	'/todos/_all_docs'],
		['search',	'/todos/_find'],
		['read',	'/todos/%s']
	]));

	$routeProvider.when(Uribuilder.Instance.getPath('todo', 'index'), {
		template: '<gsc-todo></gsc-todo>'
	});
}