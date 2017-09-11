import {Uribuilder} from '../_vanilla/Uribuilder';

export function AppConfig($stateProvider: ng.ui.IStateProvider) {'ngInject';
	$stateProvider.state({
		name: '404',
		url: '*path',
		component: 'gscApp404'
	});
}