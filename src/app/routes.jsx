import Home from './containers/Home';
import List from './containers/List';
import Signup from './containers/Signup';
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
      {
        path: '/signup',
        component: Signup,
      },
    ],
  },
];

export default routes;
