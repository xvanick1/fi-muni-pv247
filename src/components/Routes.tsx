import { Switch, Route } from 'react-router-dom';

import About from '../pages/About';
import Feedback from '../pages/Feedback';
import Login from '../pages/Login';
import Portfolio from '../pages/Portfolio';

const Routes = () => (
	<Switch>
		<Route path="/" exact component={About} />
		<Route path="/portfolio" exact component={Portfolio} />
		<Route path="/feedback" exact component={Feedback} />
		<Route path="/login" exact component={Login} />
	</Switch>
);
export default Routes;
