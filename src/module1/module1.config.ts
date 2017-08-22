import {Uribuilder} from '../_vanilla/Uribuilder';

export function Module1Config($routeProvider: ng.route.IRouteProvider) {'ngInject';
	$routeProvider.when(Uribuilder.Instance.getPath('module1', 'index'), {
		template: '<gsc-module1></gsc-module1>'
	});
}