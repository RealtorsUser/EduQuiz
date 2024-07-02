import React, { useState, useEffect } from 'react';
import { register } from '../api';
import axios from 'axios';

function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [classLevel, setClassLevel] = useState('');
    const [schoolName, setSchoolName] = useState('');
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [rollNumber, setRollNumber] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [schools, setSchools] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/schools')
            .then(response => setSchools(response.data))
            .catch(error => console.error('Error fetching schools', error));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await register({
                firstName,
                lastName,
                classLevel,
                schoolName,
                registrationNumber,
                rollNumber,
                username,
                password
            });
            console.log(response.data);
            // Handle successful registration (e.g., redirect to login)
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </div>
                <div>
                    <label>Class</label>
                    <select value={classLevel} onChange={(e) => setClassLevel(e.target.value)} required>
                        <option value="">Select Class</option>
                        <option value="I">I</option>
                        <option value="II">II</option>
                        <option value="III">III</option>
                        <option value="IV">IV</option>
                        <option value="V">V</option>
                        <option value="VI">VI</option>
                        <option value="VII">VII</option>
                        <option value="VIII">VIII</option>
                        <option value="IX">IX</option>
                        <option value="X">X</option>
                    </select>
                </div>
                <div>
                    <label>School Name</label>
                    <select value={schoolName} onChange={(e) => setSchoolName(e.target.value)} required>
                        <option value="">Select School</option>
                        {schools.map((school) => (
                            <option key={school.id} value={school.name}>{school.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Registration Number</label>
                    <input type="text" value={registrationNumber} onChange={(e) => setRegistrationNumber(e.target.value)} required />
                </div>
                <div>
                    <label>Roll Number</label>
                    <input type="text" value={rollNumber} onChange={(e) => setRollNumber(e.target.value)} required />
                </div>
                <div>
                    <label>Username</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
