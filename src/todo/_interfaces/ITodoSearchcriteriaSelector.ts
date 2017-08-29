namespace gs {
	export namespace todo {
		export interface ITodoSearchcriteriaSelector {
			query?: string,
			$or?: Array<{[field: string]: {$regex: string}}>
			state?: gs.todo.TodoState
		}
	}
}