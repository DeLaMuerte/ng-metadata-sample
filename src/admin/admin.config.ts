import {Uribuilder} from '../_vanilla/Uribuilder';
import {LoginService} from '../login/login.service';
import {CommonAlertService} from '../common/alert/common.alert.service';

export function AdminConfig($stateProvider: ng.ui.IStateProvider) {'ngInject';

	$stateProvider.state({
		name: 'admin',
		url: '/admin',
		component: 'gscAdmin',
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