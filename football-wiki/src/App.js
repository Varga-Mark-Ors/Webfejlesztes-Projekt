import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Squad from "./components/squad/Squad";
import Squads from './components/squads/Squads';
import Footballers from './components/footballers/Footballers';
import Footballer from "./components/footballer/Footballer";
import NotFound from './components/notfound/NotFound';
import useTeams from "./hooks/UseTeams";
import usePlayers from "./hooks/UsePlayers";
import useContracts from './hooks/UseContracts';
import Contract from "./components/contract/Contract";

function App() {
  const teams = useTeams();
  const players = usePlayers();
  const contracts = useContracts();

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route index element={<Home teams={teams} />} />
          <Route path="team" element={<Squads teams={teams} />} />
          <Route path="team/:teamId" element={<Squad teams={teams} contracts={contracts} />} />
          <Route path="player" element={<Footballers players={players} />} />
          <Route path="player/:playerId" element={<Footballer contracts={contracts}/>} />
          <Route path="contract" element={<Contract contracts={contracts}/>}/>
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} /> {/* Global fallback */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
