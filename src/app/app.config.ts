import {Uribuilder} from '../_vanilla/Uribuilder';

export function AppConfig($routeProvider: ng.route.IRouteProvider) {'ngInject';
	$routeProvider
		.otherwise({
			redirectTo: Uribuilder.Instance.getPath('home', 'index')
		});
}