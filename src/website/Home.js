import "./Home.css";
import { Link } from "react-router-dom";
import background from "./background.png";

function Home(){
	return (
		<>
			<div className = "intro-block">
            <h1 class="title">
                <span>c</span>
                <span>o</span>
                <span>l</span>
                <span>o</span>
                <span>u</span>
                <span>r</span>
                <span>M</span>
                <span>E</span>
            </h1>
                <h2 className = "text">create the perfect colour palette for all your needs</h2>
            </div>

            <div className="back"><img className="background" src={background}/></div>

            <div className="start-block">
				<Link className="themes" to="/Themes">
				    <h2>discover your palette here</h2>
				</Link>
			</div>
		</>
	);
};

export default Home;