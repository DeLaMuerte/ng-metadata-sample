import {sprintf, vsprintf} from 'sprintf-js';

export class Uribuilder implements gs.IUribuilder {

	private static instance: Uribuilder;

	private readonly protocol: string = window.location.protocol;
	private readonly couchDbLocation: string = window.location.hostname;
	private readonly couchDbPort: number = 5984;

	private restUris: Map<string, Map<string, string>> = new Map<string, Map<string, string>>();

	private constructor() {}

	public static get Instance(): Uribuilder {
		return this.instance || (this.instance = new this());
	}

	public setRestUris(module: string, operations: Map<string, string>): void {
		this.restUris.set(module, operations);
	}

	public getRestUri(module: string, operation: string, params?: any, query?: any): string {
		let path: string = this.restUris.get(module).get(operation);

		if (params != undefined) {
			path = params instanceof Array ? vsprintf(path, params) : sprintf(path, params);
		}

		let uri = this.protocol + '//' + this.couchDbLocation + ':' + this.couchDbPort + path;

		return query ? uri + '?' + $.param(query) : uri;
	};

}