import React from "react";
import { useParams } from "react-router-dom";
import "./Squad.css";
import { Link } from "react-router-dom";


const Squad = ({ teams, contracts}) => {

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
    <div>
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
          </div>
        </div>
      </div>
      
      <div className="players-container">
        <p className="players-text"><strong>Players:</strong></p>
        {contracts.map((contract) =>
          contract.team.teamId === team.teamId ? ( 
            <div key={contract.id} className="contract-card">
              <div className="players-row">
                <Link to={`/Webfejlesztes-Projekt/player/${contract.player.idNumber}`}>
                  <div className="players-name">
                    <h4>{contract.player.name}</h4>
                  </div>
                </Link>
                <p>
                  <strong>Position:</strong> {contract.player.position}; 
                  <strong> Country:</strong> {contract.player.country}; 
                  <strong> Salary:</strong> {contract.salary}$;
                </p>
              </div>
            </div>
          ) : null 
        )}
      </div>
  </div>
  );
};

export default Squad;
