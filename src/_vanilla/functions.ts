import * as angular from "angular";

export function gsAlert(str: string): void {
	alert(str);
}

/**
 * First part of path represents the object and can be any string, but should be the variable name for more readability.
 * Allowed operators within the path are <code>?.</code> for optional lookups and <code>?[...]</code> as alias for <code>?.</code> to
 * have better readability with arrays.
 *
 * @param object
 * @param path
 * @return
 */
export function sno(object: any, path: string): any {
	let keys: Array<string> = path.split("?.");
	keys.shift();

	// because first path part is object
	let key: string = keys.shift();

	while (key) {
		if (!object) {
			return undefined;
		}
		if (keys.length === 0) {
			return object[key];
		}
		if (key.indexOf('?[') != -1 && key.indexOf('?[') < key.indexOf(']')) {
			// foo because it will be shifted anyway
			object = sno(object, 'foo?.' + key.replace('?[', '?.').replace(']',''));
		} else {
			if (!object[key]) {
				return undefined;
			}
			object = object[key];
		}

		key = keys.shift();
	}
	return object;
}

/**
 * returns a new object which contains all of the original object's keys that have a truthy value
 */
export function compact(object: any): any {
	let compactedObj = {};
	Object.keys(object).forEach((k: string) => {
		if (object[k]) {
			compactedObj[k] = object[k];
			if (angular.isObject(compactedObj[k]) && !angular.isArray(compactedObj[k])) {
				compactedObj[k] = compact(compactedObj[k]);
			}
		}
	});
	return compactedObj;
}