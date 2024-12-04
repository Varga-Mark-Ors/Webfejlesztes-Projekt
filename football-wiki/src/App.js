import './App.css';
import api from "./api/axiosConfig";
import { useState, useEffect } from "react";

function App() {

  const [teams, setTeams] = useState([]); // Ensure teams is an array

  const getTeams = async () => {
    try {
      const response = await api.get("/team");
      console.log("API response:", response.data); // Debug the response
      setTeams(response.data || []); // Fallback to empty array if response.data is undefined
    } catch (err) {
      console.error("Error fetching teams:", err);
      setTeams([]); // Set teams to an empty array on error
    }
  };

  useEffect(() => {
    getTeams();
  }, []); // Fetch teams on mount

  useEffect(() => {
    console.log("Teams state updated:", teams); // Log teams state changes
  }, [teams]);

  return (
    <div className="App">
      <h1>Teams</h1>
      {Array.isArray(teams) && teams.length > 0 ? (
        <ul>
          {teams.map((team) => (
            <li key={team.teamId}>{team.name}</li>
          ))}
        </ul>
      ) : (
        <p>No teams available or loading...</p>
      )}
    </div>
  );
}

export default App;
