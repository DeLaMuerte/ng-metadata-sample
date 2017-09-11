import {Uribuilder} from '../_vanilla/Uribuilder';
import {LoginService} from '../login/login.service';
import {CommonAlertService} from '../common/alert/common.alert.service';

export function AdminConfig($stateProvider: ng.ui.IStateProvider) {'ngInject';

	$stateProvider
		.state({
			name: 'admin',
			url: '/admin',
			component: 'gscAdmin',
			redirectTo: 'admin.tab1'
			// resolve: {
			// 	permitted: ($location: ng.ILocationService, commonAlertService: CommonAlertService, loginService: LoginService) => {'ngInject';
			// 		if (!loginService.userCtxSubject.getValue() || loginService.userCtxSubject.getValue().roles.indexOf('_admin') == -1) {
			// 			commonAlertService.error('Not permitted');
			// 			$location.path(Uribuilder.Instance.getPath('home', 'index'));
			// 		}
			// 	}
			// }
		})
		.state({
			name: 'admin.tab1',
			url: '/tab1',
			component: 'gscAdminTab1'
		})
		.state({
			name: 'admin.tab2',
			url: '/tab2',
			component: 'gscAdminTab2'
		})
		.state({
			name: 'admin.tab3',
			url: '/tab3',
			component: 'gscAdminTab3'
		})
		.state({
			name: 'admin.tab4',
			url: '/tab4',
			component: 'gscAdminTab4'
		});
}