import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Squad from "./components/squad/Squad";
import Squads from './components/squads/Squads';
import Footballers from './components/footballers/Footballers';
import Footballer from "./components/footballer/Footballer";
import NotFound from './components/notfound/NotFound';
import useTeams from "./hooks/UseTeams";
import usePlayers from "./hooks/UsePlayers";

function App() {
  const teams = useTeams();
  const players = usePlayers();

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route index element={<Home teams={teams} />} />
          <Route path="team" element={<Squads teams={teams} />} />
          <Route path="team/:teamId" element={<Squad teams={teams} />} />
          <Route path="player" element={<Footballers players={players} />} />
          <Route path="player/:playerId" element={<Footballer />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} /> {/* Global fallback */}
      </Routes>
    </div>
  );
}

export default App;
