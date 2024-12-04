import "./Hero.css";
import Carousel from "react-material-ui-carousel";
import React from "react";
import { Paper } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Hero = ({ teams }) => {
    return (
        <div className="team-carousel-container">
            <Carousel>
                {teams.map((team) => (
                    <Paper key={team.name}>
                        <div className="team-card-container">
                            <div className="team-card" style={{ "--img": `url(${team.backdrop})` }}>
                                <div className="team-detail">
                                    <div className="team-badge">
                                        <img src={team.badge} alt="" />
                                    </div>
                                    <div className="team-name">
                                        <h4>{team.name}</h4>
                                    </div>
                                    <div className="team-buttons-container">
                                        <Link to={`/team/${team.teamId}`}>
                                            <div className="team-button-icon-container">
                                                <FontAwesomeIcon
                                                    className="team-button-icon"
                                                    icon={faMagnifyingGlass}
                                                />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Paper>
                ))}
            </Carousel>
        </div>
    );
};

export default Hero;
