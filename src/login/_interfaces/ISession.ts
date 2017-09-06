namespace gs {
	export namespace login {
		export interface ISession {
			info: {
				authentication_db: string,
				authentication_handlers: Array<string>,
				authenticated: string
			};
			ok: boolean;
			userCtx: gs.login.IUserCtx
		}
	}
}