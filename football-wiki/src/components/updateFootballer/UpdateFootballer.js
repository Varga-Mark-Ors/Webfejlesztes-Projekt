import React, { useState, useEffect } from "react";
import "./UpdateFootballer.css";
import api from "../../api/axiosConfig";
import { useParams, useNavigate } from "react-router-dom";

function UpdateFootballer() {
    const { playerId } = useParams(); // Extract directly from params
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        age: "",
        gender: "male",
        country: "Spain",
        height: "",
        netWorth: "",
        position: "Forward",
    });

    useEffect(() => {
        const getPlayer = async () => {
            try {
                const response = await api.get(`/player/${playerId}`);
                const player = response.data;
                setFormData({
                    name: player.name || "",
                    age: player.age || "",
                    gender: player.gender ? "male" : "female",
                    country: player.country || "Spain",
                    height: player.height || "",
                    netWorth: player.netWorth || "",
                    position: player.position || "Forward",
                });
            } catch (err) {
                console.error("Error fetching player:", err);
                alert("Failed to load player data.");
            }
        };
        getPlayer();
    }, [playerId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const playerData = {
            idNumber: playerId,
            name: formData.name,
            age: formData.age,
            gender: formData.gender === "male",
            country: formData.country,
            height: parseFloat(formData.height),
            netWorth: parseInt(formData.netWorth, 10),
            position: formData.position,
        };

        try {
            const response = await api.put(`/player/update`, playerData);
            alert(`Player updated successfully: ${JSON.stringify(response.data)}`);
            navigate(`/player/${playerId}`); // Navigate to the player's profile
        } catch (error) {
            console.error("Error updating player:", error);
            alert("Failed to update player. See console for details.");
        }
    };

    return (
        <div className="update-footballer">
            <h1>Update Footballer</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Age:
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Gender:
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </label>
                <br />
                <label>
                    Country:
                    <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                    >
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
                    <input
                        type="number"
                        step="0.01"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Net Worth:
                    <input
                        type="number"
                        name="netWorth"
                        value={formData.netWorth}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Position:
                    <select
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        required
                    >
                        <option value="Forward">Forward</option>
                        <option value="Midfielder">Midfielder</option>
                        <option value="Defender">Defender</option>
                        <option value="Goalkeeper">Goalkeeper</option>
                    </select>
                </label>
                <br />
                <button type="submit">Update Player</button>
            </form>
        </div>
    );
}

export default UpdateFootballer;
