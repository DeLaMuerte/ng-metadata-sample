import {Component, OnInit} from 'ng-metadata/core';

@Component({
	selector: 'gsc-module2',
	template: require('./module2.index.component.html')
})
export class Module2IndexComponent implements OnInit {

	public ngOnInit(): void {
		console.debug('Module2IndexComponent onInit()');
	}

}