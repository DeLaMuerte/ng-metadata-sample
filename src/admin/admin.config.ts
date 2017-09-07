import {Uribuilder} from '../_vanilla/Uribuilder';
import {LoginService} from '../login/login.service';
import {CommonAlertService} from '../common/alert/common.alert.service';

export function AdminConfig($routeProvider: ng.route.IRouteProvider) {'ngInject';

	Uribuilder.Instance.setPaths('admin', new Map<string, string>([
		['index',	'/admin']
	]));

	$routeProvider
		.when(Uribuilder.Instance.getPath('admin', 'index'), {
			template: '<gsc-admin></gsc-admin>',
			// resolve: {
			// 	permitted: ($location: ng.ILocationService, commonAlertService: CommonAlertService, loginService: LoginService) => {'ngInject';
			// 		if (!loginService.userCtxSubject.getValue() || loginService.userCtxSubject.getValue().roles.indexOf('_admin') == -1) {
			// 			commonAlertService.error('Not permitted');
			// 			$location.path(Uribuilder.Instance.getPath('home', 'index'));
			// 		}
			// 	}
			// }
		});
}