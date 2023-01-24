import { patch } from './routePath';
import Home from '../pages/home';
import NotFound from '../pages/not-found';
import Country from '../pages/country';

export const routeMap = [
	{
		path: patch.home,
		element: <Home />,
		exact: true,
	},
	{
		path: patch.country(":name"),
		element: <Country />,
	},
	{
		path: patch.notFound,
		element: <NotFound />,
		status: 404,
	},
	{
		path: '*',
		element: <NotFound />,
		status: 404,
	},
];
