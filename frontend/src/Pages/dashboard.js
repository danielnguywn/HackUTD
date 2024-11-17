import { Link } from 'react-router-dom'
import './dashboard.css';
import NavBarDash from '../components/NavBarDash';

const Dashboard = () => {
    return (
        <div>
            <div className="dark-gradient-background">
                <NavBarDash />
                <div className="dash-header">
                    <div className="dash-header-text-1">
                        Welcome back!
                    </div>
                    <div className="dash-header-text-2">
                        Your goals are within reach—let's make progress today!
                    </div>
                </div>
                <div className="dash-body">
                    <div className="dash-left">
                        <div className="dash-row">
                            <div className="dash-widget-small">
                                <div className="dash-widget-label">Balance</div>
                                <div className="dash-widget-text">
                                    <div className="dash-widget-bold">$800.00</div>
                                </div>
                            </div>
                            <div className="dash-widget-small">
                                <div className="dash-widget-label">Progress Towards Goal</div>
                                <div className="dash-widget-text">
                                    <div className="dash-widget-bold">$325</div>
                                    <div className="dash-widget-secondary">/ $1,000</div>
                                </div>
                                <div className="dash-widget-progress">
                                    <div className="dash-widget-progress-fill"></div>
                                    <div className="dash-widget-progress-empty"></div>
                                </div>
                            </div>
                        </div>
                        <div className="dash-row">
                            <div className="dash-widget-large">
                                <div className="dash-widget-label">Add Transaction Record</div>
                            </div>
                        </div>
                    </div>
                    <div className="dash-right">
                        <div className="dash-row">
                            <div className="dash-widget-chat">
                                <div className="chat-header">Ask Poyo</div>
                                <div className="chat-body">
                                    <div className="chat-other">
                                        im poyo
                                    </div>
                                    <div className="chat-other">
                                        im poyo and youre watching disney channel dan dan dan dan
                                    </div>
                                    <div className="chat-other">
                                        asdajkdiqhwioqwdiaqwdkjqwdoiqjwdiojqwdoijqwoidjqowidjqowdjqiowdjqiowdoqwjdoqwdo
                                    </div>
                                    <div className="chat-other">
                                        asdajkdiqhwioqwdiaqwdkjqwdoiqjwdiojqwdoijqwoidjqowidjqowdjqiowdjqiowdoqwjdoqwdo
                                    </div>
                                    <div className="chat-other">
                                        asdajkdiqhwioqwdiaqwdkjqwdoiqjwdiojqwdoijqwoidjqowidjqowdjqiowdjqiowdoqwjdoqwdo
                                    </div>
                                    <div className="chat-other">
                                        asdajkdiqhwioqwdiaqwdkjqwdoiqjwdiojqwdoijqwoidjqowidjqowdjqiowdjqiowdoqwjdoqwdo
                                    </div>
                                    <div className="chat-other">
                                        asdajkdiqhwioqwdiaqwdkjqwdoiqjwdiojqwdoijqwoidjqowidjqowdjqiowdjqiowdoqwjdoqwdo
                                    </div>
                                    <div className="chat-self">
                                        asdajkdiqhwioqwdiaqwdkjqwdoiqjwdiojqwdoijqwoidjqowidjqowdjqiowdjqiowdoqwjdoqwdo
                                    </div>
                                    <div className="chat-self">
                                        asdajkdiqhwioqwdiaqwdkjqwdoiqjwdiojqwdoijqwoidjqowidjqowdjqiowdjqiowdoqwjdoqwdo
                                    </div>
                                    <div className="chat-self">
                                        asdajkdiqhwioqwdiaqwdkjqwdoiqjwdiojqwdoijqwoidjqowidjqowdjqiowdjqiowdoqwjdoqwdo
                                    </div>
                                    <div className="chat-self">
                                        asdajkdiqhwioqwdiaqwdkjqwdoiqjwdiojqwdoijqwoidjqowidjqowdjqiowdjqiowdoqwjdoqwdo
                                    </div>
                                </div>
                                <input className="chat-input" placeholder="Ask Poyo for advice"></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard