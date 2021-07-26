import "./Elegant_Dark.css";
import { Link } from "react-router-dom";

function randColour()
{
    var colours = ["FF7E0F","0D5AB0","00A997","75E900","FFFA00","FFD200","FFAA00","FF8F32","FF5C32","E82D62","AE22AE","4C36B8"];
    var colour = colours[Math.floor(Math.random() * colours.length)];
    return colour; 
}


function Elegant(){
	return (
		<>
        <div className = "colours">
            <h1 className = "colour">colour</h1>
        </div>
        

		</>
	);
};

export default Elegant;