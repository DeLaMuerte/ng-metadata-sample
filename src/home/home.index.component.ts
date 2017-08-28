import {Component} from 'ng-metadata/core';
import {CommonAlertService} from '../common/alert/common.alert.service';

@Component({
	selector: 'gsc-home',
	template: require('./home.index.component.html')
})
export class HomeIndexComponent {

	constructor(
		private commonAlertService: CommonAlertService
	) {}

	public triggerAlert(type: gs.common.alert.AlertType) {
		switch (type) {
			case 'INFO':
				this.commonAlertService.info('a message');
				break;
			case 'SUCCESS':
				this.commonAlertService.success('a message');
				break;
			case 'WARNING':
				this.commonAlertService.warning('a message');
				break;
			case 'ERROR':
				this.commonAlertService.error('a message');
				break;
		}
	}
}