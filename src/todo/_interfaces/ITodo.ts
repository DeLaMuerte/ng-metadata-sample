namespace gs {
	export namespace todo {
		export interface ITodo extends gs.ICouchDbObject {
			title?: string,
			description?: string,
			state?: gs.todo.TodoState,
			createdAt?: gs.IDatetimeISOString,
			modifiedAt?: gs.IDatetimeISOString,
			openedAt?: gs.IDatetimeISOString,
			doneAt?: gs.IDatetimeISOString
		}
	}
}