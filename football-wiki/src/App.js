import './App.css';
import api from "./api/axiosConfig";
import { useState, useEffect } from "react";
import Layout from './components/Layout';
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Squad from "./components/squad/Squad";
import Squads from './components/squads/Squads';

function App() {
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

  return (
    <div className="App">
      <Header />
      <Routes>
        {/* A szülő útvonal most már *-ot tartalmaz */}
        <Route path="*" element={<Layout />}>
          {/* Az index útvonal most relatív */}
          <Route index element={<Home teams={teams} />} />
          {/* A gyerek útvonalak relatívak */}
          <Route path="team/:teamid" element={<Squad teams={teams} />} />
          <Route path="team" element={<Squads teams={teams} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
