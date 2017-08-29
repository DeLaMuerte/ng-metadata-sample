import * as angular from 'angular';
import {Record, List} from 'immutable';

let record = Record({
	docs: List(),
	warning: null
});

export class Page<T> extends record {
	public docs: List<T>;
	public warning: null;

	constructor(args: gs.IPage = {docs: []}, type?: any) {
		let _args: any = angular.copy(args);

		if (_args.docs) {
			_args.docs = List(type ? _args.docs.map(val => new type(val)) : _args.docs);
		}

		super(_args);
	}
}