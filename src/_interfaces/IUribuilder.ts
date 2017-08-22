namespace gs {
	export interface IUribuilder {

		/**
		 * adds a module with its components into the paths map
		 */
		setPaths(module: string, components: Map<string, string>): void;

		/**
		 * returns a routing path without searchparams and hashes
		 *
		 * @example: Uribuilder.getPath('contact', 'index') => '/contact'
		 * @example: Uribuilder.getPath('contact', 'create') => '/contact/create'
		 * @example: Uribuilder.getPath('contact', 'view', ':id') => '/contact/:id'
		 */
		getPath(module: string, component: string, parameters?: Array<string> | string): string;

		/**
		 * returns a routing uri without searchparams and hashes
		 *
		 * @example: Uribuilder.getPath('contact', 'index') => './!#/contact'
		 * @example: Uribuilder.getPath('contact', 'create') => './!#/contact/create'
		 * @example: Uribuilder.getPath('contact', 'view', ':id') => './!#/contact/:id'
		 */
		getUri(module: string, component: string, parameters?: Array<string> | string): string;

		/**
		 * return the module of a path
		 */
		getModule(givenPath: string): string;

		/**
		 * adds a module with its operations into the restUris map
		 */
		setRestUris(module: string, operations: Map<string, string>): void;

		/**
		 * gets a rest uri by module and operation
		 */
		getRestUri(module: string, operation: string): string;

	}
}