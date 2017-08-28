namespace gs {
	export namespace common {
		export namespace alert {
			export interface IAlert {
				message?: string,
				type?: gs.common.alert.AlertType,
				promise?: ng.IPromise<any>
			}
		}
	}
}