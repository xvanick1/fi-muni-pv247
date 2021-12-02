import { Switch, Route } from 'react-router-dom';

import About from '../pages/About';
import Feedbacks from '../pages/Feedbacks';
import Login from '../pages/Login';
import Portfolio from '../pages/Portfolio';

const Routes = () => (
	<Switch>
		<Route path="/" exact component={About} />
		<Route path="/portfolio" exact component={Portfolio} />
		<Route path="/feedback" exact component={Feedbacks} />
		<Route path="/login" exact component={Login} />
	</Switch>
);
export default Routes;
