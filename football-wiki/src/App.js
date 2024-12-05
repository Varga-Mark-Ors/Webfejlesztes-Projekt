import './App.css';
import api from "./api/axiosConfig";
import { useState, useEffect } from "react";
import Layout from './components/Layout';
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Squad from "./components/squad/Squad";
import Squads from './components/squads/Squads';
import NotFound from './components/notfound/NotFound';

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
        <Route path="/*" element={<Layout />}>
          <Route index element={<Home teams={teams} />} />
          <Route path="team" element={<Squads teams={teams} />} />
          <Route path="team/:teamId" element={<Squad teams={teams} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} /> {/* Global fallback */}
      </Routes>
    </div>
  );
}

export default App;
