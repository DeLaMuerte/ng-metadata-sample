import {Uribuilder} from '../_vanilla/Uribuilder';

export function Module1Run() {
	console.debug('Module1Run()');

	Uribuilder.Instance.addPaths('module1', new Map<string, string>([
		['index',	'/module1'],
		['create',	'/module1/create'],
		['view',	'/module1/%s']
	]))
}