import {Component, OnInit} from 'ng-metadata/core';

@Component({
	selector: 'gsc-module2',
	template: require('./module2.main.component.html')
})
export class Module2MainComponent implements OnInit {

	public ngOnInit(): void {
		console.debug('Module2MainComponent onInit()');
	}

}