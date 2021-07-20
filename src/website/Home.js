import "./Home.css";
import { Link } from "react-router-dom";

function Home(){
	return (
		<>
			<div className = "intro-block">
            <h1 class="title">
                <span>C</span>
                <span>O</span>
                <span>L</span>
                <span>O</span>
                <span>U</span>
                <span>R</span>
            </h1>
                <h2 className = "text">create the perfect colour palette for all your needs</h2>
            </div>

            <div className="start-block">
				<Link className="themes" to="/Themes">
				    <h2>discover your palette here</h2>
				</Link>
			</div>
		</>
	);
};

export default Home;