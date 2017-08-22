import {sprintf, vsprintf} from 'sprintf-js';

export class Uribuilder implements gs.IUribuilder {

	private static instance: Uribuilder;

	private readonly protocol: string = window.location.protocol;
	private readonly couchDbLocation: string = window.location.hostname;
	private readonly couchDbPort: number = 5984;

	private paths: Map<string, Map<string, string>> = new Map<string, Map<string, string>>([
		['home', new Map<string, string>([['index', '/']])]
	]);

	private restUris: Map<string, Map<string, string>> = new Map<string, Map<string, string>>();

	private constructor() {

	}

	public static get Instance(): Uribuilder {
		return this.instance || (this.instance = new this());
	}

	public setPaths(module: string, components: Map<string, string>): void {
		this.paths.set(module, components);
	}

	public getPath(module: string, component: string, params?: Array<string> | string): string {
		let path: string = this.paths.get(module).get(component);

		if (params != undefined) {
			return params instanceof Array ? vsprintf(path, params) : sprintf(path, params);
		} else {
			return path;
		}
	};

	public getModule(path: string): string {
		let module: string;

		this.paths.forEach((components: Map<string, string>, currentModule: string) => {
			components.forEach((currentPath: string) => {
				if (path == currentPath) {
					module = currentModule;
				}
			});
		});

		return module;
	};

	public getUri(module: string, component: string, parameters?: Array<string> | string): string {
		return './#!' + this.getPath(module, component, parameters)
	};

	public setRestUris(module: string, operations: Map<string, string>): void {
		this.restUris.set(module, operations);
	}

	public getRestUri(module: string, operation: string, params?: any, query?: any): string {
		let path: string = this.restUris.get(module).get(operation);

		if (params != undefined) {
			path = params instanceof Array ? vsprintf(path, params) : sprintf(path, params);
		}

		return this.protocol + '//' + this.couchDbLocation + ':' + this.couchDbPort + path + '?' + $.param(query);
	};

}