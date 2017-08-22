import * as angular from 'angular';
import {bundle} from 'ng-metadata/core';

import {HomeModule} from '../home/home.module';

export function gsInit() {
	console.debug('gsInit()');
	window.addEventListener('load', () => {
		console.debug('loaded');
		angular.bootstrap(document, [bundle(HomeModule).name], {strictDi: true});
	});
}