import {Uribuilder} from '../_vanilla/Uribuilder';

export function ContactConfig($routeProvider: ng.route.IRouteProvider) {'ngInject';

	Uribuilder.Instance.setPaths('contact', new Map<string, string>([
		['index',	'/contact'],
		['create',	'/contact/create'],
		['view',	'/contact/%s']
	]));

	Uribuilder.Instance.setRestUris('contact', new Map<string, string>([
		['search',	'/contact/_all_docs'],
		['read',	'/contact/%s'],
	]));

	$routeProvider.when(Uribuilder.Instance.getPath('contact', 'index'), {
		template: '<gsc-contact></gsc-contact>'
	});
}