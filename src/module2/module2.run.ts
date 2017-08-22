import {Uribuilder} from '../_vanilla/Uribuilder';

export function Module2Run() {
	console.debug('Module2Run()');

	Uribuilder.Instance.addPaths('module2', new Map<string, string>([
		['index',	'/module2'],
		['create',	'/module2/create'],
		['view',	'/module2/%s'],
	]))
}