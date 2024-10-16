import Header from "../Header"
import "./index.css"

const Features = () =>{
    return (
        <>
        <Header/>
           <div className="feature-container">
                <div className="how-work-section">
                    <div className="avatar-section">
                      <img className="avatar" src="https://th.bing.com/th/id/OIP.OidcxrlDsbLzmsDJzP8hQwHaHa?w=162&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
                    </div>
                    <div className="avatar-description">
                        <h1 className="feat-heading">How it Works ?</h1>
                        <p className="select-avatar">Select an Avatar</p>
                        <p className="generate-script">Generate Script</p>
                        <p className="ai-voices">Select AI Voices</p>
                        <p className="publish">Publish</p>
                    </div>
                </div>
                <div className="tech-section">
                    <button className="tech-btn">Technology</button>
                    <button className="tech-btn">Artificial Intelligence</button>
                    <button className="tech-btn">Design</button>
                    <button className="tech-btn">AI & Bot</button>
                    <button className="tech-btn">Customizable</button>
                    <button className="tech-btn">3D Model</button>
                    <button className="tech-btn">People</button>
                    <button className="tech-btn">Create Videos</button>
                    <button className="tech-btn">Outfits</button>
                    <button className="tech-btn">Analyze</button>
                    <button className="tech-btn">Voice Chat</button>
                    <button className="tech-btn">Marketing</button>
                    <button className="tech-btn">Record</button>
                </div>
                <div className="each-feat-section">
                    <div className="feat-card">
                        <h1>AI Outfits</h1>
                        <img className="each-feat-img" src="https://th.bing.com/th/id/OIP.aqCJGhKXqWiJujA2iPcGWgAAAA?rs=1&pid=ImgDetMain"/>
                    </div>
                    <div className="feat-card">
                    <h1>Realistic AI Avatar</h1>
                        <img className="each-feat-img" src="https://th.bing.com/th/id/OIP.NQgDCzGdnY2tYvZHoWOB6AHaE8?rs=1&pid=ImgDetMain"/>
                    </div>
                    <div className="feat-card">
                    <h1>Generate your Script</h1>
                        <img className="each-feat-img" src="https://th.bing.com/th/id/OIP.ISs6UXe5bFa7ENb7er65rAAAAA?w=320&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
                    </div>
                    <div className="feat-card">
                    <h1>AI Powered Voice Generator</h1>
                        <img className="each-feat-img" src="https://th.bing.com/th/id/OIP.ItYPNes-RoDjK2q-Np2rPwAAAA?rs=1&pid=ImgDetMain"/>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Features