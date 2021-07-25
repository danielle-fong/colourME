import Home from "./website/Home";
import Themes from "./website/themes/Themes";

import Elegant from "./website/themes/Elegant/Elegant";
import Elegant_Dark from "./website/themes/Elegant/Dark/Elegant_Dark";
import Elegant_Light from "./website/themes/Elegant/Light/Elegant_Light";

import Minimal from "./website/themes/Minimal/Minimal";
import Minimal_Dark from "./website/themes/Minimal/Dark/Minimal_Dark";
import Minimal_Light from "./website/themes/Minimal/Light/Minimal_Light";

import Modern from "./website/themes/Modern/Modern";
import Modern_Dark from "./website/themes/Modern/Dark/Modern_Dark";
import Modern_Light from "./website/themes/Modern/Light/Modern_Light";

import Nature from "./website/themes/Nature/Nature";
import Nature_Dark from "./website/themes/Nature/Dark/Nature_Dark";
import Nature_Light from "./website/themes/Nature/Light/Nature_Light";

import Neon from "./website/themes/Neon/Neon";
import Neon_Dark from "./website/themes/Neon/Dark/Neon_Dark";
import Neon_Light from "./website/themes/Neon/Light/Neon_Light";

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

					<Route path="/Modern" exact component={Modern}/>
					<Route path="/Modern_Dark" exact component={Modern_Dark}/>
					<Route path="/Modern_Light" exact component={Modern_Light}/>

					<Route path="/Nature" exact component={Nature}/>
					<Route path="/Nature_Dark" exact component={Nature_Dark}/>
					<Route path="/Nature_Light" exact component={Nature_Light}/>

					<Route path="/Neon" exact component={Neon}/>
					<Route path="/Neon_Dark" exact component={Neon_Dark}/>
					<Route path="/Neon_Light" exact component={Neon_Light}/>
					
				</Switch>
			</Router>
		</>
	);
};

export default App;
