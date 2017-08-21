// import {Uribuilder} from '../_vanilla/Uribuilder';

export function BaseConfig($routeProvider: ng.route.IRouteProvider) {'ngInject';
	$routeProvider.when('/', {
		template: '<gsc-base></gsc-base>'
	});
}