import {Component, Inject} from 'ng-metadata/core';
import {Uribuilder} from '../../_vanilla/Uribuilder';

@Component({
	selector: 'gsc-header-mainmenu',
	template: require('./header.mainmenu.component.html')
})
export class HeaderMainmenuComponent {

	public constructor(
		@Inject('$location') private $location: ng.ILocationService
	) {}

	public isActive(module: string): boolean {
		return module == Uribuilder.Instance.getModule(this.$location.path());
	}
}