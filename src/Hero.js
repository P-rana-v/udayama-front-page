import { IconContext } from "react-icons"
import { FaArrowRight } from "react-icons/fa6"

function Hero() {
    return (
        <IconContext.Provider value={{ style: { verticalAlign: 'bottom' } }}>
            <div className="hero">
                <div className="content">
                    <h1>INDUSTRY ACADEMIA GOVERNMENT CONCLAVE</h1>
                    <p>bridging the gap between academia and industry through interaction, innovation, technological convergence, and full-time internships</p>
                    <div>
                        <button className="button sign-up">Sign Up <FaArrowRight /></button>
                        <button className="button learn-more">Learn More</button>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    )
}

export default Hero