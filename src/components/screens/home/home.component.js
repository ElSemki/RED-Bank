import { BaseScreen } from '@/core/component/base-screen.component';
import renderService from '@/core/services/render.service';

import { $R } from '@/core/rquery/rquery.lib';
import styles from './home.module.scss';
import template from './home.template.html';

export class Home extends BaseScreen {
	constructor() {
		super({ title: 'Home' });
	}

	render() {
		const element = renderService.htmlToElement(template, [], styles);
		$R(element).find('h1').css('color', 'blue');
		return element.outerHTML;
	}
}
