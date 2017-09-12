import {Uribuilder} from '../_vanilla/Uribuilder';
import {LoginService} from '../login/login.service';
import {CommonAlertService} from '../common/alert/common.alert.service';

export function AdminConfig($stateProvider: ng.ui.IStateProvider) {'ngInject';

	Uribuilder.Instance.setRestUris('admin.couchdb', new Map<string, string>([
		['status',	'/']
	]));

	$stateProvider
		.state({
			name: 'admin',
			url: '/admin',
			component: 'gscAdmin',
			redirectTo: 'admin.couchdb'
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
			name: 'admin.couchdb',
			url: '/couchdb',
			component: 'gscAdminCouchdb'
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