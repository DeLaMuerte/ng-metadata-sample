import {Uribuilder} from '../_vanilla/Uribuilder';

export function ContactConfig($routeProvider: ng.route.IRouteProvider) {'ngInject';

	Uribuilder.Instance.setPaths('contact', new Map<string, string>([
		['index',	'/contact'],
		['create',	'/contact/create'],
		['view',	'/contact/%s']
	]));

	Uribuilder.Instance.setRestUris('contact', new Map<string, string>([
		['list',	'/contacts/_all_docs'],
		['search',	'/contacts/_find'],
		['read',	'/contacts/%s'],
	]));

	$routeProvider.when(Uribuilder.Instance.getPath('contact', 'index'), {
		template: '<gsc-contact></gsc-contact>'
	});
}