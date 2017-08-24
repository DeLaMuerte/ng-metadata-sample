namespace gs {
	export interface ITodo extends gs.ICouchDbObject {
		title?: string,
		description?: string,
		state?: gs.TodoState,
		createdAt?: gs.IDatetimeISOString,
		modifiedAt?: gs.IDatetimeISOString,
		openedAt?: gs.IDatetimeISOString,
		doneAt?: gs.IDatetimeISOString
	}
}