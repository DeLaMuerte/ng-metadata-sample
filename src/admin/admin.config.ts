import {Uribuilder} from '../_vanilla/Uribuilder';

export function AdminConfig($routeProvider: ng.route.IRouteProvider) {'ngInject';

	Uribuilder.Instance.setPaths('admin', new Map<string, string>([
		['index',	'/admin']
	]));

	$routeProvider.when(Uribuilder.Instance.getPath('admin', 'index'), {
		template: '<gsc-admin></gsc-admin>'
	});
}