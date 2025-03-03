import './CreateFootballer.css';
import React, { useState } from 'react';
import api from '../../api/axiosConfig';
import { useParams, useNavigate, Link } from "react-router-dom"; 


function CreateFootballer() {
    const navigate = useNavigate(); 
    
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: 'male',
        country: 'Spain', 
        height: '',
        netWorth: '',
        position: 'Forward'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const playerData = {
            idNumber: null, 
            name: formData.name,
            age: formData.age,
            gender: formData.gender === 'male', 
            country: formData.country,
            height: parseFloat(formData.height),
            netWorth: parseInt(formData.netWorth, 10),
            position: formData.position
        };

        try {
            const response = await api.post('/Webfejlesztes-Projekt/player/add', playerData);
            alert(`Player created successfully: ${JSON.stringify(response.data)}`);
            navigate("/player"); 
            window.location.reload();
        } catch (error) {
            console.error('Error creating player:', error);
            alert('Failed to create player. See console for details.');
        }
    };

    return (
        <div className="create-footballer">
            <h1>Create a New Footballer</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Age:
                    <input type="number" name="age" value={formData.age} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Gender:
                    <select name="gender" value={formData.gender} onChange={handleChange} required>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </label>
                <br />
                <label>
                    Country:
                    <select name="country" value={formData.country} onChange={handleChange} required>
                        <option value="Spain">Spain</option>
                        <option value="France">France</option>
                        <option value="Germany">Germany</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Italy">Italy</option>
                        <option value="Romania">Romania</option>
                        <option value="England">England</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Brazil">Brazil</option>
                    </select>
                </label>
                <br />
                <label>
                    Height (m):
                    <input type="number" step="0.01" name="height" value={formData.height} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Net Worth:
                    <input type="number" name="netWorth" value={formData.netWorth} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Position:
                    <select name="position" value={formData.position} onChange={handleChange} required>
                        <option value="Forward">Forward</option>
                        <option value="Midfielder">Midfielder</option>
                        <option value="Defender">Defender</option>
                        <option value="Goalkeeper">Goalkeeper</option>
                    </select>
                </label>
                <br />
                <button type="submit">Create Player</button>
            </form>
        </div>
    );
}

export default CreateFootballer;