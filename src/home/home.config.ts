import {Uribuilder} from '../_vanilla/Uribuilder';

export function HomeConfig($routeProvider: ng.route.IRouteProvider) {'ngInject';
	$routeProvider.when(Uribuilder.Instance.getPath('home', 'index'), {
		template: '<gsc-home></gsc-home>'
	})
}