import {Component, OnInit} from 'ng-metadata/core';

@Component({
	selector: 'gsc-admin-tab2',
	template: require('./admin.tab2.component.html')
})
export class AdminTab2Component implements OnInit {

	public now: Date;

	constructor() {
		console.debug('AdminTab2Component constructor()');
		this.now = new Date();
	}

	public ngOnInit() {
		console.debug('AdminTab2Component ngOnInit()');
	}

}