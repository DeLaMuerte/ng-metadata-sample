import {Uribuilder} from '../_vanilla/Uribuilder';

export function TodoRun() {

	Uribuilder.Instance.setPaths('todo', new Map<string, string>([
		['index',	'/todo'],
		['create',	'/todo/create'],
		['view',	'/todo/%s'],
	]))
}