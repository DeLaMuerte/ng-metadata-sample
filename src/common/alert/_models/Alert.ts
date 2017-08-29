import * as angular from 'angular';
import {Record} from 'immutable';

let record = Record({
	message: '',
	type: 'INFO',
	promise: null
});

export class Alert extends record implements gs.common.alert.IAlert {
	public message: string;
	public type: gs.common.alert.AlertType;
	public promise: ng.IPromise<any>;

	constructor(args: gs.common.alert.IAlert = {}) {
		let _args = angular.copy(args);
		super(_args);
	}
}