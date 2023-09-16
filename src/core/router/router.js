import { NotFound } from '@/components/screens/not-found/not-found.component';
import { ROUTES } from './routes.data';

export class Router {
	#routes;
	#currentRoute;

	constructor() {
		//* Массив путей
		this.#routes = ROUTES;
		//* Текущий путь
		this.#currentRoute = null;
		this.#handleRouteChange();
	}

	//* Получаем адрес из адресной строки
	getCurrentPath() {
		return window.location.pathname;
	}

	//* Метод для изменения страницы
	#handleRouteChange() {
		//* Получаем путь
		const path = this.getCurrentPath() || '/';
		//* Ищем путь в массиве routes
		let route = this.#routes.find(route => route.path === path);

		//* Если такого пути нет - Not Found
		if (!route) {
			route = {
				component: NotFound
			};
		}

		this.#currentRoute = route;
		this.render();
	}

	render() {
		const component = new this.#currentRoute.component();
		document.querySelector('#app').innerHTML = component.render();
	}
}
