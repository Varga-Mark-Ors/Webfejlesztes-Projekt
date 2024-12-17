import React, { useState, useEffect } from "react";
import "./Footballer.css";
import { useParams, useNavigate, Link } from "react-router-dom"; 
import api from '../../api/axiosConfig';

const Footballer = ({ contracts }) => {
    let params = useParams();
    let key = params.playerId;
    const [player, setPlayer] = useState(null);
    const navigate = useNavigate(); 

    const getPlayer = async () => {
        try {
            const response = await api.get(`/player/${key}`);
            setPlayer(response.data || {});
        } catch (err) {
            console.error("Error fetching player:", err);
        }
    };

    const deletePlayer = async () => {
        try {
            await api.delete(`/player/${key}`); 
            navigate("/player"); 
            window.location.reload();
        } catch (err) {
            console.error("Error deleting player:", err);
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
                        <p><strong>Position:</strong> {player.position}</p>
                        <p><strong>Country:</strong> {player.country}</p>
                        <p><strong>Height:</strong> {player.height} cm</p>
                        <p><strong>Net Worth:</strong> ${player.netWorth}</p>
                        {contracts.map((contract) =>
                            contract.player.idNumber === player.idNumber ? ( 
                                <p><strong>Plays for: </strong> <Link to={`/team/${contract.team.teamId}`}>{contract.team.name}</Link></p>
                            ) : null 
                        )}
                        <button 
                            className="back-button" 
                            onClick={() => navigate("/player")}>
                            Back to the players
                        </button>
                        <button className="delete-button" onClick={deletePlayer}>
                            Delete Player
                        </button> 
                        <button 
                            className="update-button"
                            onClick={() => navigate(`/player/update/${player.idNumber}`)}>
                                Update player
                        </button>
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
