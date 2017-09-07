import {Component, OnInit} from 'ng-metadata/core';

@Component({
	selector: 'gsc-admin-tab1',
	template: require('./admin.tab1.component.html')
})
export class AdminTab1Component implements OnInit {

	public now: Date;

	constructor() {
		console.debug('AdminTab1Component constructor()');
		this.now = new Date();
	}

	public ngOnInit() {
		console.debug('AdminTab1Component ngOnInit()');
	}

}