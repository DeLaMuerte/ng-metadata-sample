import * as angular from 'angular';
import {bundle} from 'ng-metadata/core';

import {AppModule} from '../app/app.module';

export function gsInit() {
	window.addEventListener('load', () => {
		angular.bootstrap(document, [bundle(AppModule).name], {strictDi: true});
	});
}