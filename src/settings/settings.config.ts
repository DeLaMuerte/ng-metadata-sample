import {Uribuilder} from '../_vanilla/Uribuilder';

export function SettingsConfig($routeProvider: ng.route.IRouteProvider) {'ngInject';

	Uribuilder.Instance.setPaths('settings', new Map<string, string>([
		['index',	'/settings']
	]));

	$routeProvider.when(Uribuilder.Instance.getPath('settings', 'index'), {
		template: '<gsc-settings></gsc-settings>'
	});
}