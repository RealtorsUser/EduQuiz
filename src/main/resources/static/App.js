import React from 'react';
import { Link } from 'react-router-dom';

function App() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/quiz">Quiz</Link></li>
                    <li><Link to="/results">Results</Link></li>
                </ul>
            </nav>
            <h1>EduMedia</h1>
        </div>
    );
}

export default App;
