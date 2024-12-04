import "./Hero.css";
import Carousel from "react-material-ui-carousel";
import React from "react";
import {Paper} from "@mui/material";

const Hero = ({teams}) => {
    return (
        <div className="team-carousel-container">
            <Carousel>
                {
                    teams.map((team) =>{
                        return(
                            <Paper>
                                <div className="team-card-container">
                                    <div className= "team-card" style={{"--img": `url(${team.backdrop})`}}>
                                        <div className="team-detail">
                                            <div className="team-badge">
                                                <img src= {team.badge} alt=""/>
                                            </div>
                                            <div className="team-name"> 
                                                <h4>{team.name}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Hero