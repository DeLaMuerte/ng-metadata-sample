import {Component, Inject, OnInit} from 'ng-metadata/core';
import {Uribuilder} from '../_vanilla/Uribuilder';

@Component({
	selector: 'gsc-header',
	template: require('./header.component.html')
})
export class HeaderComponent implements OnInit {

	private $location: ng.ILocationService;

	public constructor(@Inject('$location') $location: ng.ILocationService) {
		this.$location = $location;
	}

	public ngOnInit(): void {
		console.debug('HeaderComponent ngOnInit()');
	}

	public isActive(module: string): boolean {
		return module == Uribuilder.Instance.getModule(this.$location.path());
	}

}