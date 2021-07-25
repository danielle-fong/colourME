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

import Pastel from "./website/themes/Pastel/Pastel";
import Pastel_Dark from "./website/themes/Pastel/Dark/Pastel_Dark";
import Pastel_Light from "./website/themes/Pastel/Light/Pastel_Light";

import Tropical from "./website/themes/Tropical/Tropical";
import Tropical_Dark from "./website/themes/Tropical/Dark/Tropical_Dark";
import Tropical_Light from "./website/themes/Tropical/Light/Tropical_Light";

import Vintage from "./website/themes/Vintage/Vintage";
import Vintage_Dark from "./website/themes/Vintage/Dark/Vintage_Dark";
import Vintage_Light from "./website/themes/Vintage/Light/Vintage_Light";

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

					<Route path="/Pastel" exact component={Pastel}/>
					<Route path="/Pastel_Dark" exact component={Pastel_Dark}/>
					<Route path="/Pastel_Light" exact component={Pastel_Light}/>

					<Route path="/Tropical" exact component={Tropical}/>
					<Route path="/Tropical_Dark" exact component={Tropical_Dark}/>
					<Route path="/Tropical_Light" exact component={Tropical_Light}/>
					
					<Route path="/Vintage" exact component={Vintage}/>
					<Route path="/Vintage_Dark" exact component={Vintage_Dark}/>
					<Route path="/Vintage_Light" exact component={Vintage_Light}/>

				</Switch>
			</Router>
		</>
	);
};

export default App;
