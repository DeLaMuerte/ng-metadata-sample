import {Component, Inject, OnInit} from 'ng-metadata/core';
import {Uribuilder} from '../_vanilla/Uribuilder';

@Component({
	selector: 'gsc-app',
	template: require('./app.component.html')
})
export class AppComponent implements OnInit {

	public constructor(@Inject('$rootScope') $rootScope: gs.IRootScopeService) {
		$rootScope.Uribuilder = Uribuilder.Instance;
	}

	public ngOnInit(): void {
		console.debug('AppComponent ngOnInit()');
	}

}