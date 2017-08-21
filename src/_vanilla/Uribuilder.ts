import {sprintf, vsprintf} from 'sprintf-js';

export class Uribuilder {

	private static instance: Uribuilder;

	private routes: Map<string, string>;

	private initializeRoutes() {
		this.routes.set('index', '/#/index');

		this.routes.set('module1', '/#/module1');
		this.routes.set('module1Create', this.routes.get('module1') + '/create');
		this.routes.set('module1View', this.routes.get('module1') + '/%s');

		this.routes.set('module2', '/#/module2');
		this.routes.set('module2Create', this.routes.get('module2') + '/create');
		this.routes.set('module2View', this.routes.get('module2') + '/%s');
	}

	private constructor() {
		this.initializeRoutes();
	}

	public static get Instance(): Uribuilder {
		return this.instance || (this.instance = new this());
	}

	/**
	 * returns a routing path without searchparams and hashes
	 *
	 * @example: Uribuilder.getRoutingPath('module1') => '/module1'
	 * @example: Uribuilder.getRoutingPath('module1Create') => '/module1/create'
	 * @example: Uribuilder.getRoutingPath('module1View', ':id') => '/module1/:id'
	 *
	 * @param identifier
	 * @param parameters
	 * @returns {String}
	 */
	public getRoutingPath(identifier, parameters?) {
		let routingPath = this.routes[identifier].split(/(#|\?)/)[2];

		if(parameters != undefined) {
			if (parameters instanceof Array){
				return vsprintf(routingPath, parameters);
			} else {
				return sprintf(routingPath, parameters);
			}
		} else {
			return routingPath;
		}
	};

}