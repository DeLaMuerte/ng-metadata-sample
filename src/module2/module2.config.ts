// import {Uribuilder} from '../_vanilla/Uribuilder';

export function Module2Config($routeProvider: ng.route.IRouteProvider) {'ngInject';
	$routeProvider.when('/module2', {
		template: '<gsc-module2></gsc-module2>'
	});
}