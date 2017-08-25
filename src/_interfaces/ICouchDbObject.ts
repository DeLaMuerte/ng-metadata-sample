namespace gs {
	export interface ICouchDbObject {
		_id?: string,
		_rev?: string,
		_deleted?: boolean
	}
}