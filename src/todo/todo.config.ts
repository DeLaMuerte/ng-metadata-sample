import {Uribuilder} from '../_vanilla/Uribuilder';

export function TodoConfig($routeProvider: ng.route.IRouteProvider) {'ngInject';
	$routeProvider.when(Uribuilder.Instance.getPath('todo', 'index'), {
		template: '<gsc-todo></gsc-todo>'
	});
}