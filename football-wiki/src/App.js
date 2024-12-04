import './App.css';
import api from "./api/axiosConfig";
import { useState, useEffect } from "react";
import Layout from './components/Layout';
import {Routes, Route} from "react-router-dom"
import Home from "./components/home/Home";

function App() {

  const [teams, setTeams] = useState([]); 

  const getTeams = async () => {
    try {
      const response = await api.get("/team");

      setTeams(response.data || []); 
    } catch (err) {
      console.error("Error fetching teams:", err);
      setTeams([]); 
    }
  };

  useEffect(() => {
    getTeams();
  }, []); 

  useEffect(() => {
    console.log("Teams state updated:", teams); 
  }, [teams]);

  return (
    <div className="App">
      
    <Routes>
      <Route path= "/" element = {<Layout/>}>
        <Route path= "/" element= {<Home/>}></Route>

      </Route>
    </Routes>

    </div>
  );
}

export default App;
