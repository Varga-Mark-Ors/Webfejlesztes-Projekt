import React from "react";
import { useParams } from "react-router-dom";
import "./Squad.css";

const Squad = ({ teams }) => {

  let params = useParams();
  let key = params.teamId;
  
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
      </div>
    </div>
  );
};

export default Squad;
