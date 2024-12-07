import React, { useState, useEffect } from "react";
import "./Footballer.css";
import { useParams } from "react-router-dom";
import api from '../../api/axiosConfig';
import { Link } from "react-router-dom";

const Footballer = () => {
    let params = useParams();
    let key = params.playerId;
    const [player, setPlayer] = useState(null);

    const getPlayer = async () => {
        try {
            const response = await api.get(`/player/${key}`);
            setPlayer(response.data || {});
        } catch (err) {
            console.error("Error fetching player:", err);
        }
    };

    useEffect(() => {
        getPlayer();
    }, []);

    const FemaleImage = "https://www.gmevents.ae/wp-content/uploads/2019/04/female-placeholder.jpg";
    const MaleImage = "https://s3.eu-central-1.amazonaws.com/uploads.mangoweb.org/shared-prod/visegradfund.org/uploads/2021/08/placeholder-male.jpg";

    return (
        <div className="player-card-container">
            {player ? (
                <div className="player-card">
                    <div className="player-details">
                        <h2>{player.name}</h2>
                        <p><strong>Age:</strong> {player.age}</p>
                        <p><strong>Gender:</strong> {player.gender ? "Male" : "Female"}</p>
                        <p><strong>Country:</strong> {player.country}</p>
                        <p><strong>Height:</strong> {player.height} cm</p>
                        <p><strong>Net Worth:</strong> ${player.netWorth}</p>
                        <Link to="/player">Back to Players</Link>
                    </div>
                    <img 
                        className="player-image"
                        src={player.gender ? MaleImage : FemaleImage} 
                        alt={player.gender ? "Male Placeholder" : "Female Placeholder"} 
                    />
                </div>
            ) : (
                <p>Loading player information...</p>
            )}
        </div>
    );
};

export default Footballer;
