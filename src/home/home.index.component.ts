import {Component, Inject, OnInit} from 'ng-metadata/core';

@Component({
	selector: 'gsc-home',
	template: require('./home.index.component.html')
})
export class HomeIndexComponent implements OnInit {

	public constructor(
		@Inject('$http') private $http: ng.IHttpService) {}

	public ngOnInit(): void {
		console.debug('HomeIndexComponent ngOnInit()');
	}

}