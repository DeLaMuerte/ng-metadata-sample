import * as angular from 'angular';
import {List, Record} from 'immutable';

let record = Record({
	name: null,
	roles: List()
});

export class UserCtx extends record implements gs.login.IUserCtx {
	public name: string;
	public roles: Array<string>;

	constructor(args: gs.login.IUserCtx = {}) {
		let _args: any = angular.copy(args);
		if (_args.roles) {
			_args.roles = List(_args.roles);
		}
		super(_args);
	}
}