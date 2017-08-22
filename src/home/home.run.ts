import {Uribuilder} from '../_vanilla/Uribuilder';

export function HomeRun() {
	console.debug('HomeRun()');

	Uribuilder.Instance.addPaths('home', new Map<string, string>([
		['index',	'/']
	]))
}