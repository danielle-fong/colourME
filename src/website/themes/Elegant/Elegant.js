import "./Elegant.css";
import { Link } from "react-router-dom";

function Elegant(){
	return (
		<>
			<div className = "header">Choose your shade:</div>

			<div className = "block">
			<Link className="light" to="/Light">
			<h1>LIGHT</h1>
			</Link>
			<Link className="dark" to="/Dark">
			<h1>DARK</h1>
			</Link>
			</div>
		</>
	);
};

export default Elegant;