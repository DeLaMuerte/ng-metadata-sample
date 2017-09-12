namespace gs {
	export namespace contact {
		export interface IContact extends gs.ICouchDbObject {
			firstName: string,
			lastName: string
		}
	}
}