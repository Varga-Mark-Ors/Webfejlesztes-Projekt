import { useState, useEffect } from "react";
import api from "../api/axiosConfig";

const UseContracts = () => {
  const [contracts, setContracts] = useState([]);

  const getContracts = async () => {
    try {
      const response = await api.get("/contract");
      setContracts(response.data || []);
    } catch (err) {
      console.error("Error fetching teams:", err);
    }
  };

  useEffect(() => {
    getContracts();
  }, []);

  return contracts;
};

export default UseContracts;
