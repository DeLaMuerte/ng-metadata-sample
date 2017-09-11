namespace gs {
	export interface IUribuilder {

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