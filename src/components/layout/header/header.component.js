import ChildComponent from '@/core/component/child.component';
import renderService from '@/core/services/render.service';

import { UserItem } from '@/components/ui/user-item/user-item.component';
import styles from './header.module.scss';
import template from './header.template.html';
import { Logo } from './logo/logo.component';
import { LogoutButton } from './logout-button/logout-button.component';
import { Search } from './search/search.component';

export class Header extends ChildComponent {
	constructor({ router }) {
		super();
		this.router = router;
	}

	render() {
		this.element = renderService.htmlToElement(
			template,
			[
				Logo,
				new LogoutButton({
					router: this.router
				}),
				Search,
				new UserItem({
					avatarPath:
						'https://avatars.mds.yandex.net/i?id=0f1ff2bcf942e2c2288543ed98c910e6e43ae2dd-9181886-images-thumbs&n=13',
					name: 'Sasha'
				})
			],
			styles
		);
		return this.element;
	}
}
