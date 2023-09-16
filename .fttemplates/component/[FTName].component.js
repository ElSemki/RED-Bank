import { BaseScreen } from '@/core/component/base-screen.component';
import renderService from '@/core/services/render.service';

import styles from './<FTName>.module.scss';
import template from './<FTName>.template.html';

export class <FTName | pascalcase> extends BaseScreen {
	render() {
		this.element = renderService.htmlToElement(template, [], styles);
		return this.element
	}
}
