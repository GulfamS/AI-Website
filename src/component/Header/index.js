import {Link} from "react-router-dom"
import "./index.css"

const Header = () =>{
    return(
    <div className="header">
        <h1 className="ai-heading">AI GEN.</h1>
        <ul className="first-section">
        <Link to="/" className="nav-link">
        <li>Home</li>
        </Link>
        <Link to="/features" className="nav-link">
        <li>Features</li>
        </Link>
        <Link to="/roadmap" className="nav-link">
        <li>Roadmap</li>
        </Link>
        <Link to="/tokenomics" className="nav-link">
        <li>Tokenomics</li>
        </Link>
        </ul>
        <div className="second-section">
            <button className="white-btn">Whitepaper</button>
            <button className="head-start-btn">Get Started</button>
        </div>
    </div>
   )
}

export default Header