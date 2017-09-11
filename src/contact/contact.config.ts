import {Uribuilder} from '../_vanilla/Uribuilder';

export function ContactConfig($stateProvider: ng.ui.IStateProvider) {'ngInject';

	Uribuilder.Instance.setRestUris('contact', new Map<string, string>([
		['list',	'/contacts/_all_docs'],
		['search',	'/contacts/_find'],
		['read',	'/contacts/%s'],
	]));

	$stateProvider
		.state({
			name: 'contact',
			url: '/contact',
			component: 'gscContact',
			redirectTo: 'contact.index'
		})
		.state({
			name: 'contact.index',
			url: '/index',
			component: 'gscContactIndex'
		});
}