import "./Elegant.css";
import { Link } from "react-router-dom";
import background from "./background.png";

function Elegant(){
	return (
		<>
			<div className = "header">Choose your shade</div>

			<div className = "block">
			
			<Link className="light" to="/Elegant_Light">
			<h1>LIGHT</h1>
			</Link>

			<Link className="dark" to="/Elegant_Dark">
			<h1>DARK</h1>
			</Link>
			</div>
			<div className="col"><img className="background" src={background}/></div>
		</>
	);
};

export default Elegant;