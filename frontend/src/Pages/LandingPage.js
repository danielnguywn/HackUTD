import { Link } from 'react-router-dom'
import './LandingPage.css';
import NavBarPre from '../components/NavBar';

const LandingPage = () => {
    return (
        <div>
            <div className="light-gradient-background">
                <div className="wave-background">
                    <div className="left-center-align">
                        <div className="header-text">
                            Welcome to EarnNest
                        </div>
                        <div className="tagline-text-1">
                            Save Smart, Play Hard
                        </div>
                        <div className="tagline-text-2">
                            Level up your savings with Poyo.
                        </div>
                        <Link to="/signup" className="teal-button">Create your account today!</Link>
                    </div>
                    <NavBarPre/>
                </div>
            </div>
        </div>
    )
}

export default LandingPage