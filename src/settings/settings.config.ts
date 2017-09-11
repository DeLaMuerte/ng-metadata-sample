import {Uribuilder} from '../_vanilla/Uribuilder';

export function SettingsConfig($stateProvider: ng.ui.IStateProvider) {'ngInject';

	$stateProvider.state({
		name: 'settings',
		url: '/settings',
		component: 'gscSettings'
	});
}