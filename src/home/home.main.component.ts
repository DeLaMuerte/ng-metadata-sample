import {Component, OnInit} from 'ng-metadata/core';

@Component({
	selector: 'gsc-home',
	template: require('./home.main.component.html')
})
export class HomeMainComponent implements OnInit {

	public ngOnInit(): void {
		console.debug('HomeMainComponent onInit()');
	}

}