// import {Uribuilder} from '../_vanilla/Uribuilder';

export function IndexConfig($routeProvider: ng.route.IRouteProvider) {'ngInject';
	$routeProvider.otherwise({
		redirectTo: '/'
	});
}