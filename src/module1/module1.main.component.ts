import {Component, OnInit} from 'ng-metadata/core';

@Component({
	selector: 'gsc-module1',
	template: require('./module1.main.component.html')
})
export class Module1MainComponent implements OnInit {

	public ngOnInit(): void {
		console.debug('Module1MainComponent onInit()');
	}

}