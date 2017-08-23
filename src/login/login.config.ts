import {Uribuilder} from '../_vanilla/Uribuilder';

export function LoginConfig($routeProvider: ng.route.IRouteProvider) {'ngInject';

	Uribuilder.Instance.setRestUris('login', new Map<string, string>([
		['read',	'/_session'],
		['create',	'/_session'],
		['delete',	'/_session']
	]));
}