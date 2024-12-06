import React from "react";
import { Paper } from "@mui/material";
import "./Squads.css";

const Squads = ({ teams }) => {
  return (
    <div className="teams-container">
      {teams.map((team) => (
        <Paper key={team.name} className="team-row">
          <div className="team-badge">
            <img src={team.badge} alt={`${team.name} logo`} />
          </div>
          <div className="team-name">
            <h4>{team.name}</h4>
          </div>
          <div className="team-details">
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
