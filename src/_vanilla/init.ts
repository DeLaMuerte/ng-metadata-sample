import * as angular from 'angular';
import {bundle} from 'ng-metadata/core';

import {BaseModule} from '../base/base.module';

export function gsInit() {
	console.debug('gsInit()');
	window.addEventListener('load', () => {
		console.debug('loaded');
		console.debug('BaseModule:', BaseModule);
		console.debug('BaseModule.name:', BaseModule.name);
		angular.bootstrap(document, [bundle(BaseModule).name], {strictDi: true});
	});
}