import React from "react";
import "./Footballers.css";
import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper"; // Import this if you're using Material-UI
import api from "../../api/axiosConfig";

const Footballers = () => {
  const [players, setPlayers] = useState([]);

  const getPlayers = async () => {
    try {
      const response = await api.get("/player");
      console.log("API Response:", response.data); // Debugging response
      setPlayers(response.data || []);
    } catch (err) {
      console.error("Error fetching players:", err);
    }
  };

  useEffect(() => {
    getPlayers();
  }, []);

  return (
    <div className="players-container">
      {players.map((player) => (
        <Paper key={player.name} className="players-row">
          <div className="players-name">
            <h4>{player.name}</h4>
          </div>
          <div className="players-details">
            <p>
              <strong>Age:</strong> {player.age}
            </p>
            <p>
              <strong>Gender:</strong> {player.gender}
            </p>
            <p>
              <strong>Country:</strong> {player.country}
            </p>
            <p>
              <strong>Height:</strong> {player.height}
            </p>
            <p>
              <strong>Net Worth:</strong> {player.netWorth}
            </p>
          </div>
        </Paper>
      ))}
    </div>
  );
};

export default Footballers;
