import {Component, OnInit} from 'ng-metadata/core';

@Component({
	selector: 'gsc-index',
	template:
		`<ul>
			<li><a href=".">Home</a></li>
			<li><a href="./#!/module1">Module 1</a></li>
			<li><a href="./#!/module2">Module 2</a></li>
		</ul>
		<ng-view></ng-view>`
})
export class IndexComponent implements OnInit {
	public ngOnInit() {
		console.debug('IndexComponent ngOninit()');
	}

}