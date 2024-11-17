import './dashboard.css';
import NavBarDash from '../components/NavBarDash';
import { useState } from 'react';
import { getAuth } from 'firebase/auth';
import axios from 'axios'

const Dashboard = () => {
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    }

    const sendMessage = async () => {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
            const email = user.email;
            console.log('User email:', email);
        
    
            const data = {
                email: email,
                userInput: userInput,
            };
    
            try {
                const response = await axios.post('http://localhost:4000/api/users/chatbot', data);
                console.log('Response:', response.data);
                setChatHistory(prevHistory => [
                    ...prevHistory,
                    { role: 'user', content: userInput },
                    { role: 'assistant', content: response.data.botresponse }
                ]);

                setUserInput('');
            } catch (error) {
                console.error('Error:', error.response ? error.response.data : error.message);
            }
        } else {
            console.log('No user is signed in');
        }
    }

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
                                    <div className="dash-widget-bold">$0</div>
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
                                    {chatHistory.map((message, index) => (
                                        <div 
                                            key={index}
                                            className={message.role === 'user' ? 'chat-self' : 'chat-other'}>
                                            {message.content}
                                        </div>
                                    ))}
                                </div>
                                <input 
                                    className="chat-input"
                                    placeholder="Ask Poyo for advice"
                                    value={userInput}
                                    onChange={(e) => setUserInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard