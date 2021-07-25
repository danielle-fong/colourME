import "./Themes.css";
import { Link } from "react-router-dom";

function Themes(){
	return (
		<>
			<div className = "header">Choose your theme</div>

			<div className = "top">
			<Link className="elegant" to="/Elegant">
			<h1>ELEGANT</h1>
			</Link>

			<Link className="minimal" to="/Minimal">
			<h1>MINIMAL</h1>
			</Link>

			<Link className="modern" to="/Modern">
			<h1>MODERN</h1>
			</Link>

			<Link className="nature" to="/Nature">
			<h1>NATURE</h1>
			</Link>
			</div>

			<div className = "bottom">
			<Link className="neon" to="/Neon">
			<h1>NEON</h1>
			</Link>

			<Link className="pastel" to="/Pastel">
			<h1>PASTEL</h1>
			</Link>

			<Link className="tropical" to="/Tropical">
			<h1>TROPICAL</h1>
			</Link>
			
			<Link className="vintage" to="/Vintage">
			<h1>VINTAGE</h1>
			</Link>
            </div>
		</>
	);
};

export default Themes;