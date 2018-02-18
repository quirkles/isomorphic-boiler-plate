import Home from './containers/Home';
import List from './containers/List';
import App from './containers/App';

const routes = [
  {
    path: '/',
    component: App,
    routes: [
      {
        path: '/home',
        component: Home,
      },
      {
        path: '/list',
        component: List,
      },
    ],
  },
];

export default routes;
