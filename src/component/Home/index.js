import "./index.css"
import Header from "../Header"

const Home = () =>{
    return(
        <>
            <Header/>
            <div className="home-container">
            <div className="first-home-section">
                <h1 className="heading">Create an Amazing Images with the Power of AI</h1>
                <p className="tagline">AI That Transforms Ideas into Reality</p>
                <div>
                <button className="button">Start Creating</button>
                </div>
            </div>
            <div className="second-home-section">
                <img className="img1" src="https://th.bing.com/th?q=Ai+Pretty&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"/>
                <img className="img2" src="https://th.bing.com/th/id/OIP.3ReNEDcGGts4WZxJKT6GDgHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
                <img className="img3" src="https://th.bing.com/th?q=Ai+Anime+Art&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"/>
                <img className="img4" src="https://th.bing.com/th?q=Ai+Artificial+Intelligence+Art&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"/>
                <img className="img5" src="https://th.bing.com/th?q=Ai+Female+Face&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"/>
                <img className="img6" src="https://th.bing.com/th?q=Disney+Pixar+Ai&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"/>
                <img className="img7" src="https://th.bing.com/th?q=Ai+Art+Images&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"/>
                <img className="img8" src="https://th.bing.com/th/id/OIP.n1fxWUpcZXWUCeQyHrFthwHaD4?w=297&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
            </div>
            </div>
        </>
    )
}

export default Home