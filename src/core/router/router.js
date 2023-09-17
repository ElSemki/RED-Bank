import { Layout } from '@/components/layout/layout.component';
import { NotFound } from '@/components/screens/not-found/not-found.component';
import { $R } from '../rquery/rquery.lib';
import { ROUTES } from './routes.data';

export class Router {
	//* Массив путей
	#routes = ROUTES;
	//* Текущий путь
	#currentRoute = null;
	//* Разворачивали ли мы layout
	#layout = null;

	constructor() {
		//* Событие при нажатии на стрелочки <= => в поисковой строке
		window.addEventListener('popstate', () => {
			this.#handleRouteChange();
		});

		this.#handleRouteChange();
		this.#handleLinks();
	}

	//* Получаем адрес из адресной строки
	getCurrentPath() {
		return window.location.pathname;
	}

	//* Метод для изменения страницы
	#handleRouteChange() {
		//* Получаем текущий путь из адресной строки
		const path = this.getCurrentPath() || '/';
		//* Ищем путь в массиве routes
		let route = this.#routes.find(route => route.path === path);

		//* Если такого пути нет - Not Found
		if (!route) {
			route = {
				component: NotFound
			};
		}

		//* Текущий элемент (элемент массива routes (object))
		this.#currentRoute = route;
		this.#render();
	}

	//* Обработчик на все ссылки. Убирает дефолтное действие (перезагрузку страницы) и навигирует на адрес внутри ссылки
	#handleLinks() {
		document.addEventListener('click', event => {
			const target = event.target.closest('a');
			if (target) {
				event.preventDefault();
				this.navigate(target.href);
			}
		});
	}

	//* Если путь в кликнутой ссылке не равен текущему, меняем его в поисковой строке и изменяем контент страницы
	navigate(path) {
		if (path !== this.getCurrentPath()) {
			window.history.pushState({}, '', path);
			this.#handleRouteChange();
		}
	}

	#render() {
		//* Создаем экземпляр класса (экран(screen)) из массива routes
		const component = new this.#currentRoute.component().render();

		if (!this.#layout) {
			this.#layout = new Layout({
				router: this,
				children: component
			}).render();

			$R('#app').append(this.#layout);
		} else {
			$R('#content').html('').append(component);
		}
	}
}
