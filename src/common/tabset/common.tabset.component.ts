import {Component, Directive, Inject, OnInit} from 'ng-metadata/core';
import {IPostLink} from 'angular';

@Component({
	selector: 'gsc-tabset',
	template:
		`<ul class="nav nav-tabs"></ul>
		<div class="cp-content"></div>`
})
export class CommonTabsetComponent implements OnInit, IPostLink {

	private tablistElement: JQLite;

	private tabContentElement: JQLite;

	private tabs: Array<any>;

	constructor(
		@Inject('$element') private $element: ng.IAugmentedJQuery,
		@Inject('$transclude') private $transclude: ng.ITranscludeFunction,
		@Inject('$location') private $location: ng.ILocationService
	) {}

	public ngOnInit() {
		this.tablistElement = this.$element.children('ul');
		this.tabContentElement = this.$element.children('.cp-content');
		this.tabs = [];
	}

	public $postLink() {
		this.$transclude(function(clone) {
			jQuery.each(clone.filter('cpc-tab'), (i, child) => {
				this.tablistElement.append(jQuery('<li></li>').append(child));
			})
		});
	};

	public addTab(tab: any) {
		this.tabs.push(tab);
		if (tab.tabhash && tab.tabhash == this.$location.hash()) {
			this.selectTab(tab);
		} else if (this.tabs.length == 1 && tab.tabhash && !this.$location.hash()) {
			this.selectTab(tab, true);
		} else if (this.tabs.length == 1 && !tab.tabhash) {
			this.selectTab(tab);
		}
	};

	public selectTab(tab: any, redirect?: boolean) {
		this.tablistElement.children('li').removeClass('active');

		let tabIdx = this.tabs.indexOf(tab);
		jQuery(this.tablistElement.children('li')[tabIdx]).addClass('active');
		if (redirect) {
			this.$location.hash(tab.tabhash);
			this.$location.replace();
		} else {
			this.tabContentElement.html(tab.getContent());
		}
	};

}

@Directive({
	selector: 'gsc-tab',
	template: '<a href="" data-ng-click="$ctrl.select()" data-ng-transclude="title"></a>',
	legacy: {
		transclude: {
			title: 'gstTitle',
			content: 'gstContent'
		},
		require: {
			parentCtrl: '^gscTabset'
		},
		bindings: {
			tabhash: '@'
		}
	}
})
export class CommonTabComponent implements OnInit {

	constructor(
		@Inject('$element') private $element: ng.IAugmentedJQuery,
		@Inject('$transclude') private $transclude: ng.ITranscludeFunction,
		@Inject('$location') private $location: ng.ILocationService
	) {}

	public ngOnInit() {

	}
}