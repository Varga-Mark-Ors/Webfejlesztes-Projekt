import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Squad.css";
import { Link } from "react-router-dom";


const Squad = ({ teams }) => {

  let params = useParams();
  let key = params.teamId;
  const navigate = useNavigate(); 
  
  console.log("Current teamid from URL:", params);

  if (!teams.length) {
    return <div>Loading...</div>;
  }

  const team = teams.find((t) => t.teamId === key);
  console.log("Matched team:", team);

  if (!team) {
    return <div>Team not found</div>;
  }

  return (
    <div className="team-container-squad">
      <div className="team-container-card">
        <div className="team-badge-squad">
          <img src={team.badge} alt={`${team.name} logo`} />
        </div>
          <div className="team-name-squad">
          <h4>{team.name}</h4>
        </div>
        <div className="team-details-squad">
          <p><strong>League:</strong> {team.league}</p>
          <p><strong>Country:</strong> {team.country}</p>
          <p><strong>City:</strong> {team.city}</p>
          <p><strong>Founded:</strong> {team.foundationDate}</p>
          <button 
                              className="back-button" 
                              onClick={() => navigate("/team")}>
                              Back to the teams
                          </button>
        </div>
      </div>
    </div>
  );
};

export default Squad;
