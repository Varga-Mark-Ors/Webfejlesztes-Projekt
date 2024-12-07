import { useState, useEffect } from "react";
import api from "../api/axiosConfig";

const UseTeams = () => {
  const [teams, setTeams] = useState([]);

  const getTeams = async () => {
    try {
      const response = await api.get("/team");
      setTeams(response.data || []);
    } catch (err) {
      console.error("Error fetching teams:", err);
    }
  };

  useEffect(() => {
    getTeams();
  }, []);

  return teams;
};

export default UseTeams;
