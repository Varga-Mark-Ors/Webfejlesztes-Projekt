import React from "react";
import { Paper } from "@mui/material";
import "./Squads.css";
import { Link } from "react-router-dom";

const Squads = ({ teams }) => {
  return (
    <div className="teams-container">
      {teams.map((team) => (
        <Paper
          key={team.name}
          className="teams-row"
          style={{ backgroundColor: "#1a1a1a", color: "#ffc107" }} 
        >
          <div className="teams-badge">
            <img src={team.badge} alt={`${team.name} logo`} />
          </div>
          <Link to={`/team/${team.teamId}`}>
            <div className="teams-name">
              <h4>{team.name}</h4>
            </div>
          </Link>
          <div className="teams-details">
            <p><strong>League:</strong> {team.league}</p>
            <p><strong>Country:</strong> {team.country}</p>
            <p><strong>City:</strong> {team.city}</p>
            <p><strong>Founded:</strong> {team.foundationDate}</p>
          </div>
        </Paper>
      ))}
    </div>
  );
};

export default Squads;
