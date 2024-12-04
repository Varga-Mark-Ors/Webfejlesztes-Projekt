import React from "react";

const Squads = ({ teams }) => {
    return (
      <div>
        <h1>Teams</h1>
        <ul>
          {teams.map((team, index) => (
            <li key={index}>
              <h2>{team.name}</h2>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Squads;
  
