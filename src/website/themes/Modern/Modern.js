import "./Modern.css";
import { Link } from "react-router-dom";
import background from "./background.png"

function Modern(){
	return (
		<>
			<div className = "header">Choose your shade</div>

			<div className = "block">
			
			<Link className="light" to="/Modern_Light">
			<h1>LIGHT</h1>
			</Link>

			<Link className="dark" to="/Modern_Dark">
			<h1>DARK</h1>
			</Link>
			</div>
			<div className="col"><img className="background" src={background}/></div>
		</>
	);
};

export default Modern;