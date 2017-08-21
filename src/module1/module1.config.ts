// import {Uribuilder} from '../_vanilla/Uribuilder';

export function Module1Config($routeProvider: ng.route.IRouteProvider) {'ngInject';
	$routeProvider.when('/module1', {
		template: '<gsc-module1></gsc-module1>'
	});
}