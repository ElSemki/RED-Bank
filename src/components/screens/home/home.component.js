import { BaseScreen } from '@/core/component/base-screen.component';
import renderService from '@/core/services/render.service';

import { Field } from '@/components/ui/field/field.component';
import { UserItem } from '@/components/ui/user-item/user-item.component';
import { $R } from '@/core/rquery/rquery.lib';
import styles from './home.module.scss';
import template from './home.template.html';

export class Home extends BaseScreen {
	constructor() {
		super({ title: 'Home' });
	}

	render() {
		const element = renderService.htmlToElement(
			template,
			[
				new Field({
					name: 'test',
					placeholder: 'Enter your email',
					variant: 'green'
				}),
				new UserItem(
					{
						avatarPath:
							'https://avatars.mds.yandex.net/i?id=0f1ff2bcf942e2c2288543ed98c910e6e43ae2dd-9181886-images-thumbs&n=13',
						name: 'Sasha'
					},
					false,
					() => alert('Hey')
				)
			],
			styles
		);

		$R(element).find('h1').css('color', 'blue');

		return element;
	}
}
