import React from "react";

const Contract = ({ contracts }) => {
  return (
    <div className="contract-card-container">
      {contracts.map((contract) => (
        <div key={contract.id} className="contract-card">
          <div className="contract-details">
            <p><strong>Player:</strong> {contract.player.name}</p>
            <p><strong>Team:</strong> {contract.team.name}</p>
            <p><strong>Salary:</strong> ${contract.salary}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contract;
