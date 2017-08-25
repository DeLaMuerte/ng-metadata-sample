import * as angular from 'angular';

import {AppNg1Module} from '../app/app.module';

export function gsInit() {
	window.addEventListener('load', () => {
		angular.bootstrap(document, [AppNg1Module], {strictDi: true});
	});
}