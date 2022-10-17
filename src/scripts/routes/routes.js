import Home from '../view/pages/home';
import Favorites from '../view/pages/favorites';
import Details from '../view/pages/details';

const routes = {
  '/': Home,
  '/favorites': Favorites,
  '/details/:id': Details,
};

export default routes;
