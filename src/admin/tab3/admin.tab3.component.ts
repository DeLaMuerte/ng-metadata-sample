import {Component, OnInit} from 'ng-metadata/core';

@Component({
	selector: 'gsc-admin-tab3',
	template: require('./admin.tab3.component.html')
})
export class AdminTab3Component implements OnInit {

	public now: Date;

	constructor() {
		console.debug('AdminTab3Component constructor()');
		this.now = new Date();
	}

	public ngOnInit() {
		console.debug('AdminTab3Component ngOnInit()');
	}

}