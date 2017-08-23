namespace gs {
	export interface IApiService {
		$list?: (...args: Array<any>) => ng.IHttpPromise<any>,
		$search?: (...args: Array<any>) => ng.IHttpPromise<any>,
		$create?: (...args: Array<any>) => ng.IHttpPromise<any>,
		$read?: (...args: Array<any>) => ng.IHttpPromise<any>,
		$update?: (...args: Array<any>) => ng.IHttpPromise<any>,
		$delete?: (...args: Array<any>) => ng.IHttpPromise<any>
	}
}