export class GsLocalstorage {

	private static instance: GsLocalstorage;

	private map: Map<string, string> = new Map<string, string>();

	private constructor() {}

	public static get Instance(): GsLocalstorage {
		return this.instance || (this.instance = new this());
	}

	public hasKey(key: string): boolean {
		if (this.map.has(key)) {
			return true;
		} else {
			console.error(`GsLocalstorage for ${key} is not defined`);
			return false;
		}
	}

	public getVersionedKey(key: string): string {
		return this.map.get(key);
	}

	public getStorage(key: string): any {
		if (this.hasKey(key) && localStorage.getItem(this.getVersionedKey(key))) {
			return JSON.parse(localStorage.getItem(this.getVersionedKey(key)));
		} else {
			return null;
		}
	}

	public setStorage(key: string, obj: any): void {
		if (this.hasKey(key)) {
			localStorage.setItem(this.getVersionedKey(key), JSON.stringify(obj));
		}
	}

	// public garbageCollection() {
	// 	for (let i=0; i<localStorage.length; i++) {
	// 		if (localStorage.getItem(localStorage.key(i))) {
	//
	// 		}
	// 	}
	// }
}