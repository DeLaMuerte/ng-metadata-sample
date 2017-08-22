namespace gs {
	export interface IUribuilder {

		/**
		 * adds a module with its components into the paths map
		 */
		addPaths(module: string, components: Map<string, string>): void;

		/**
		 * returns a routing path without searchparams and hashes
		 *
		 * @example: Uribuilder.getPath('module1', 'index') => '/module1'
		 * @example: Uribuilder.getPath('module1', 'create') => '/module1/create'
		 * @example: Uribuilder.getPath('module1', 'view', ':id') => '/module1/:id'
		 */
		getPath(module: string, component: string, parameters?: Array<string> | string): string;

		/**
		 * returns a routing uri without searchparams and hashes
		 *
		 * @example: Uribuilder.getPath('module1', 'index') => './!#/module1'
		 * @example: Uribuilder.getPath('module1', 'create') => './!#/module1/create'
		 * @example: Uribuilder.getPath('module1', 'view', ':id') => './!#/module1/:id'
		 */
		getUri(module: string, component: string, parameters?: Array<string> | string): string;

		/**
		 * return the module of a path
		 */
		getModule(givenPath: string): string;
	}
}