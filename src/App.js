import Home from "./website/Home";
import Themes from "./website/themes/Themes";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
	return (
		<>
			<Router>
				<Switch>
          <Route path="/" exact component={Home} />
					<Route path="/Themes" exact component={Themes} />
				</Switch>
			</Router>
		</>
	);
};

export default App;
