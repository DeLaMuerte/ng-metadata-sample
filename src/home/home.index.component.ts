import {Component, Inject, OnInit} from 'ng-metadata/core';
import {Uribuilder} from '../_vanilla/Uribuilder';

@Component({
	selector: 'gsc-home',
	template: require('./home.index.component.html')
})
export class HomeIndexComponent implements OnInit {

	constructor(@Inject('$rootScope') $rootScope: gs.IRootScopeService) {
		$rootScope.Uribuilder = Uribuilder.Instance;
		console.debug('$rootScope:', $rootScope);
	}

	public ngOnInit(): void {
		console.debug('HomeIndexComponent onInit()');
	}

}