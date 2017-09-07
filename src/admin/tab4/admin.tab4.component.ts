import {Component, OnInit} from 'ng-metadata/core';

@Component({
	selector: 'gsc-admin-tab4',
	template: require('./admin.tab4.component.html')
})
export class AdminTab4Component implements OnInit {

	public now: Date;

	constructor() {
		console.debug('AdminTab4Component constructor()');
		this.now = new Date();
	}

	public ngOnInit() {
		console.debug('AdminTab4Component ngOnInit()');
	}

}