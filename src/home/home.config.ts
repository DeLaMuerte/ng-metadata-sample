export function HomeConfig($stateProvider: ng.ui.IStateProvider) {'ngInject';
	$stateProvider
		.state({
			name: 'home',
			url: '/',
			component: 'gscHome'
		})
}