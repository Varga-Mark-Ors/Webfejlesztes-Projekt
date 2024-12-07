import { useState, useEffect } from "react";
import api from "../api/axiosConfig";

const UsePlayers = () => {
  const [players, setPlayers] = useState([]);

  const getPlayers = async () => {
    try {
      const response = await api.get("/player");
      setPlayers(response.data || []);
    } catch (err) {
      console.error("Error fetching players:", err);
    }
  };

  useEffect(() => {
    getPlayers();
  }, []);

  return players;
};

export default UsePlayers;
