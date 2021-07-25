import Home from "./website/Home";
import Themes from "./website/themes/Themes";

import Elegant from "./website/themes/Elegant/Elegant";
import Elegant_Dark from "./website/themes/Elegant/Dark/Elegant_Dark";
import Elegant_Light from "./website/themes/Elegant/Light/Elegant_Light";

import Minimal from "./website/themes/Minimal/Minimal";
import Minimal_Dark from "./website/themes/Minimal/Dark/Minimal_Dark";
import Minimal_Light from "./website/themes/Minimal/Light/Minimal_Light";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
	return (
		<>
			<Router>
				<Switch>
          <Route path="/" exact component={Home} />
					<Route path="/Themes" exact component={Themes} />

					<Route path="/Elegant" exact component={Elegant}/>
					<Route path="/Elegant_Dark" exact component={Elegant_Dark}/>
					<Route path="/Elegant_Light" exact component={Elegant_Light}/>

					<Route path="/Minimal" exact component={Minimal}/>
					<Route path="/Minimal_Dark" exact component={Minimal_Dark}/>
					<Route path="/Minimal_Light" exact component={Minimal_Light}/>
					
				</Switch>
			</Router>
		</>
	);
};

export default App;
