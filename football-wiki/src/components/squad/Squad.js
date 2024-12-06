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
    <div>
      <h1>{team.name}</h1>
    </div>
  );
};

export default Squad;
