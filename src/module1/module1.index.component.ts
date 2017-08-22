import {Component, OnInit} from 'ng-metadata/core';

@Component({
	selector: 'gsc-module1',
	template: require('./module1.index.component.html')
})
export class Module1IndexComponent implements OnInit {

	public ngOnInit(): void {
		console.debug('Module1IndexComponent onInit()');
	}

}