import {Component, Inject, Input, OnChanges, OnInit, SimpleChanges} from 'ng-metadata/core';

@Component({
	selector: 'gsc-debug',
	template: require('./common.debug.component.html')
})
export class CommonDebugComponent implements OnInit, OnChanges {

	@Input('gsModel')
	public model: any;

	public modelName: string;

	@Input('gsPronto')
	private pronto: boolean;

	public expanded: boolean;

	constructor(
		@Inject('$attrs') private $attrs: ng.IAttributes
	) {}

	public ngOnInit(): void {
		this.expanded = this.pronto != false;
	}

	public ngOnChanges(changes: SimpleChanges): void {
		if (changes.model.currentValue) {
			this.updater(changes.model.currentValue);
		}
	}

	public toggleExpanded(expanded?: boolean): void {
		this.expanded = typeof expanded === 'boolean' ? expanded : !this.expanded;
		if (this.expanded) {
			this.updater(this.model);
		}
	}

	private updater(obj: any) {
		this.modelName = this.$attrs['[gsModel]'];
		if (this.expanded) {
			console.debug(this.modelName, obj, typeof obj);
		}
	}

	public get modelAsJson(): string {
		let json: string;
		try {
			json = JSON.stringify(this.model, null, '  ');
		} catch(e) {
			json = e;
		}
		return json;

	}



}