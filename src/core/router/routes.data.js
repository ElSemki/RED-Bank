import { AboutUs } from '@/components/screens/about-us/about-us.component';
import { Auth } from '@/components/screens/auth/auth.component';
import { Home } from '@/components/screens/home/home.component';

//* ROUTES - массив с путями. path - путь в адресной строке, component - class, отвечающий за экран (screen).

export const ROUTES = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/auth',
		component: Auth
	},
	{
		path: '/about-us',
		component: AboutUs
	}
];
