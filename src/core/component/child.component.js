export default class ChildComponent {
	/**
	 * Render the child component content.
	 * @return {HTMLElement}
	 */
	render() {
		throw new Error('Render mathod must be implemented in the child class');
	}
}
