import React from "react";
import { Paper } from "@mui/material";
import "./Squads.css";
import { Link } from "react-router-dom";

const Squads = ({ teams }) => {
  return (
    <div className="teams-container-squads">
      {teams.map((team) => (
        <Paper key={team.name} className="team-row-squads">
          <div className="team-badge-squads">
            <img src={team.badge} alt={`${team.name} logo`} />
          </div>
          <Link to={`/team/${team.teamId}`}>
            <div className="team-name-squads">
              <h4>{team.name}</h4>
            </div>
          </Link>
          <div className="team-details-squads">
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
