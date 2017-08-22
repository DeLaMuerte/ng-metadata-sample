import {Uribuilder} from '../_vanilla/Uribuilder';

export function Module2Config($routeProvider: ng.route.IRouteProvider) {'ngInject';
	$routeProvider.when(Uribuilder.Instance.getPath('module2', 'index'), {
		template: '<gsc-module2></gsc-module2>'
	});
}