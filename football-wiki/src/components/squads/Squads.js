import React from "react";
import { Paper } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Squads.css";


const Squads = ({ teams }) => {
    return (
      <div>
          {teams.map((team) => (
                    <Paper key={team.name}>
                        <div className="team-card-container">
                                <div className="team-detail">
                                    <div className="team-badge">
                                        <img src={team.badge} alt="" />
                                    </div>
                                    <Link to={`/team/${team.teamId}`}>
                                      <div className="team-name">
                                          <h4>{team.name}</h4>
                                      </div>
                                    </Link>                                    
                                    <div className="team-country">
                                      <h3>{team.country}</h3>
                                    </div>
                                    <div className="team-city">
                                      <h3>{team.city}</h3>
                                    </div>
                                    <div className="team-league">
                                      <h3>{team.league}</h3>
                                    </div>
                                    <div className="team-foundationDate">
                                      <h3>{team.foundationDate}</h3>
                                    </div>
                                </div>
                        </div>
                    </Paper>
                ))}
      </div>
    );
  };
  
  export default Squads;
  
