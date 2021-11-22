import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Reviews from '../pages/Reviews';
import Login from '../pages/Login';
import Portfolio from '../pages/Portfolio';

const Routes = () => (
	<Switch>
		<Route path="/" exact component={Home} />
		<Route path="/reviews" exact component={Reviews} />
		<Route path="/portfolio" exact component={Portfolio} />
		<Route path="/login" exact component={Login} />
	</Switch>
);
export default Routes;
