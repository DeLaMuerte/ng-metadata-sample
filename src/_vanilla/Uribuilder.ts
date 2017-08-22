import {sprintf, vsprintf} from 'sprintf-js';

export class Uribuilder implements gs.IUribuilder {

	private static instance: Uribuilder;

	private paths: Map<string, Map<string, string>> = new Map<string, Map<string, string>>([
		['home', new Map<string, string>([['index', '/']])]
	]);

	private constructor() {

	}

	public static get Instance(): Uribuilder {
		return this.instance || (this.instance = new this());
	}

	public addPaths(module: string, components: Map<string, string>): void {
		this.paths.set(module, components);
	}

	public getPath(module: string, component: string, parameters?: Array<string> | string): string {
		let path: string = this.paths.get(module).get(component);

		if (parameters != undefined) {
			return parameters instanceof Array ? vsprintf(path, parameters) : sprintf(path, parameters);
		} else {
			return path;
		}
	};

	public getUri(module: string, component: string, parameters?: Array<string> | string): string {
		return './#!' + this.getPath(module, component, parameters)
	};

	public getModule(givenPath: string): string {
		let retModule: string;

		this.paths.forEach((components: Map<string, string>, module: string) => {
			components.forEach((path: string) => {
				if (givenPath == path) {
					retModule = module;
				}
			});
		});

		return retModule;
	};

}