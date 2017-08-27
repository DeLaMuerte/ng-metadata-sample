namespace gs {
	export namespace contact {
		export interface IContactSearchcriteriaSelector {
			$or?: Array<{[field: string]: {$regex: string}}>
		}
	}
}