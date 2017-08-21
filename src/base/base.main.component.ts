import {Component, OnInit} from 'ng-metadata/core';

@Component({
	selector: 'gsc-base',
	template: require('./base.main.component.html')
})
export class BaseMainComponent implements OnInit {

	public ngOnInit(): void {
		console.debug('BaseMainComponent onInit()');
	}

}