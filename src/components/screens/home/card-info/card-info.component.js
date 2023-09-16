import { BaseScreen } from '@/core/component/base-screen.component';
import renderService from '@/core/services/render.service';

import styles from './card-info.module.scss';
import template from './card-info.template.html';

export class CardInfo extends BaseScreen {
	render() {
		this.element = renderService.htmlToElement(template, [], styles);
		return this.element;
	}
}
