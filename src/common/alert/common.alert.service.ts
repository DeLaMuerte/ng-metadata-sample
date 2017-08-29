import * as Rx from 'rxjs';
import {Injectable} from 'ng-metadata/core';
import {Alert} from './_models/Alert';

@Injectable('commonAlertService')
export class CommonAlertService {
	private alertSubject: Rx.Subject<Alert> = new Rx.Subject<Alert>();
	public alertObservable: Rx.Observable<Alert> = this.alertSubject.asObservable().share();

	private updateSubject(msg: string, type: gs.common.alert.AlertType, responseObj?: Object) {
		if (responseObj) {
			msg += ':\n' + JSON.stringify(responseObj, undefined, '  ');
		}
		this.alertSubject.next(new Alert({message: msg, type: type}));
	}

	public info(msg: string, responseObj?: Object) {
		this.updateSubject(msg, 'INFO', responseObj);
	}

	public success(msg: string, responseObj?: Object) {
		this.updateSubject(msg, 'SUCCESS', responseObj);
	}

	public warning(msg: string, responseObj?: Object) {
		this.updateSubject(msg, 'WARNING', responseObj);
	}

	public error(msg: string, responseObj?: Object) {
		this.updateSubject(msg, 'ERROR', responseObj);
	}

}