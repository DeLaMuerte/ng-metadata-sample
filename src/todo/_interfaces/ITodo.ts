namespace gs {
	export namespace todo {
		export interface ITodo extends gs.ICouchDbObject {
			title?: string,
			description?: string,
			state?: gs.todo.TodoState,
			createdAt?: Date,
			modifiedAt?: Date,
			openedAt?: Date,
			doneAt?: Date
		}
	}
}