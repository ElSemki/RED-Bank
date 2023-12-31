import { getTitle } from '@/config/seo.config';

export class BaseScreen {
	/**
	 * Create a new BaseScreen instance.
	 * @param {Object} options - The options for the BaseScreen.
	 * @param {string} options.title - The title of the screen
	 */
	constructor({ title }) {
		document.title = getTitle(title);
	}

	/**
	 * Render the child component content.
	 * @return {HTMLElement}
	 */
	render() {
		throw new Error('Render mathod must be implemented in the child class');
	}
}
