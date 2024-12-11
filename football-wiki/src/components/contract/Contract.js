import React from "react";
import { Link } from "react-router-dom";


const Contract = ({ contracts }) => {
  return (
    <div className="contract-card-container">
      {contracts.map((contract) => (
        <div key={contract.id} className="contract-card">
          <div className="contract-details">
            <Link to={`/player/${contract.player.idNumber}`}>
              <div className="players-name">
                <h4>{contract.player.name}</h4>
              </div>
            </Link>
            <Link to={`/team/${contract.team.teamId}`}>
              <div className="teams-name">
                <h4>{contract.team.name}</h4>
              </div>
            </Link>
            <p><strong>Salary:</strong> ${contract.salary}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contract;
