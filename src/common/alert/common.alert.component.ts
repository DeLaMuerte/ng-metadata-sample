import {Component, Inject, OnInit} from 'ng-metadata/core';
import {CommonAlertService} from './common.alert.service';
import {Alert} from './_models/Alert';

@Component({
	selector: 'gsc-alerts',
	template: require('./common.alert.component.html'),
})
export class CommonAlertComponent implements OnInit {
	public alerts: Array<Alert> = [];

	constructor(
		@Inject('$timeout') private $timeout: ng.ITimeoutService,
		private commonAlertService: CommonAlertService
	) {}

	public ngOnInit(): void {
		this.commonAlertService
			.alertObservable
			.subscribe((addedAlert: Alert) => {
				let mutatedAlert = <Alert>addedAlert.set('promise', this.$timeout(() => {
					this.close(mutatedAlert);
				}, 7850));
				this.alerts.push(mutatedAlert);
			});
	}

	public close (alert: Alert): void {
		let idx = this.alerts.indexOf(alert);
		if (idx != -1) {
			this.$timeout(() => {
				this.$timeout.cancel(alert.promise);
				this.alerts.splice(idx, 1);
			}, 150);
		}
	}
}