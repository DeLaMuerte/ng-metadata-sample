import {Component, Inject, OnInit} from 'ng-metadata/core';

@Component({
	selector: 'gsc-header',
	template: require('./header.component.html')
})
export class HeaderComponent implements OnInit {

	public ngOnInit(): void {
		console.debug('HeaderComponent ngOnInit()');
	}

}