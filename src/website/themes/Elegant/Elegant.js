import "./Elegant.css";
import { Link } from "react-router-dom";

function Elegant(){
	return (
		<>
			<div className = "header">Choose your shade</div>

			<div className = "block">
			<h1 className = "light">LIGHT</h1>
			<h1 className = "dark">DARK</h1>
			</div>
		</>
	);
};

export default Elegant;