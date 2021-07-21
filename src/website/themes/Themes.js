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
			<h1 className = "minimal">MINIMAL</h1>
			<h1 className = "modern">MODERN</h1>
			<h1 className = "nature">NATURE</h1>
			</div>

			<div className = "bottom">
			<h1 className = "neon">NEON</h1>
			<h1 className = "pastel">PASTEL</h1>
			<h1 className = "tropical">TROPICAL</h1>
			<h1 className = "vintage">VINTAGE</h1>
            </div>
		</>
	);
};

export default Themes;