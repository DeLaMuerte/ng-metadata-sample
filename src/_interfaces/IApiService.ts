namespace gs {
	export interface IApiService {
		$search?: (...args: Array<any>) => ng.IHttpPromise<gs.IPage>,
		$create?: (...args: Array<any>) => ng.IHttpPromise<gs.ICouchDbOperationResponse>,
		$read?: (...args: Array<any>) => ng.IHttpPromise<gs.ICouchDbObject>,
		$update?: (...args: Array<any>) => ng.IHttpPromise<gs.ICouchDbOperationResponse>,
		$delete?: (...args: Array<any>) => ng.IHttpPromise<gs.ICouchDbOperationResponse>
	}
}