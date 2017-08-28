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
			.subscribe((alert: Alert) => {
				this.alerts.push(<Alert>alert.set('promise', this.$timeout(() => {
					this.close(this.alerts.findIndex((a) => {
						return a.promise == alert.promise;
					}));
				}, 7900)));
			});
	}

	close(idx: number): void {
		if (idx != -1) {
			this.$timeout.cancel(this.alerts[idx].promise);
			this.alerts.splice(idx, 1);
		}
	}
}