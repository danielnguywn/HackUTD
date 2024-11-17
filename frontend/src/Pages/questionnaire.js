import './questionnaire.css';
import NavBarDash from '../components/NavBarDash';
import { Link } from 'react-router-dom';

const Questionnaire = () => {
    return (
        <div>
            <div className="dark-gradient-background">
                <NavBarDash />
                <div className="page-center">
                    <div className="form-background">
                        <div className="form-header">Enter financial information</div>
                        <div className="form-label">What is your bank account balance?</div>
                        <input className="form-input" placeholder="Enter balance..."/>
                        <div className="form-label">What is your financial goal?</div>
                        <div className="form-select-background">
                            <select className="form-select">
                                <option value="1">Repaying debt</option>
                                <option value="2">Saving</option>
                                <option value="3">Investing</option>
                            </select>
                        </div>
                        <div className="form-label">What is your goal amount?</div>
                        <input className="form-input" placeholder="Enter goal amount..."/>
                        <div className="align-right">
                            <Link to="/dashboard" className="teal-button">Complete form</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questionnaire