import * as angular from 'angular';
import * as Immutable from 'immutable';

let record = Immutable.Record({
	docs: Immutable.List(),
	warning: null
});

export class Page<T> extends record {
	public docs: Immutable.List<T>;
	public warning: null;

	constructor(args: gs.IPage = {docs: []}, type?: any) {
		let _args: any = angular.copy(args);

		if (_args.docs) {
			_args.docs = Immutable.List(type ? _args.docs.map(val => new type(val)) : _args.docs);
		}

		super(_args);
	}
}