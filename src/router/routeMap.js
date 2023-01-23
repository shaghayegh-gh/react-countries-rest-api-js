import { routePatch } from './routePath';
import Home from '../pages/home';
import NotFound from '../pages/not-found';

export const routeMap = [
	{
		path: routePatch.home,
		element: <Home />,
		exact: true,
	},
	{
		path: '*',
		element: <NotFound />,
		status: 404,
	},
];
