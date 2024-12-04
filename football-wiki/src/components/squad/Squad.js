import React from "react";
import { useParams } from "react-router-dom";

const Squad = ({ teams }) => {
  const { teamid } = useParams();
  console.log("Current teamid from URL:", teamid);

  if (!teams.length) {
    return <div>Loading...</div>;
  }

  const team = teams.find((t) => t.teamId === teamid);
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
