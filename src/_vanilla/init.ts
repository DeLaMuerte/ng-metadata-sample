import * as angular from 'angular';
import {bundle} from 'ng-metadata/core';

import {IndexModule} from '../index.module';

export function gsInit() {
	console.debug('gsInit()');
	window.addEventListener('load', () => {
		console.debug('loaded');
		angular.bootstrap(document, [bundle(IndexModule).name], {strictDi: true});
	});
}