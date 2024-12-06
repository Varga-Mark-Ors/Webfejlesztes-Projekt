import React from "react";
import "./Footballers.css";
import Paper from "@mui/material/Paper"; 
import { Link } from "react-router-dom";

const Footballers = ({players}) => {
  
  return (
    <div className="players-container">
      {players.map((player) => (
        <Paper key={player.name} className="players-row">
          <Link to={`/player/${player.idNumber}`}>
            <div className="players-name">
              <h4>{player.name}</h4>
            </div>
          </Link>
          <div className="players-details">
            <p>
              <strong>Age:</strong> {player.age}
            </p>
            <p>
            <p><strong>Gender:</strong> {player.gender ? "Male" : "Female"}</p>
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
