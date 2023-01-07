import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class MiniJeuCard extends Component {
    render() {
        let minijeu = this.props.minijeu[1];
        return (
            <div className={" miniJeuCard"}>
                <NavLink exact to={"/MiniJeu/" + minijeu.name}>
                    <img src={minijeu.img} alt={minijeu.name}/>
                    <h2>{minijeu.name}</h2>
                    <p>{minijeu.desc}</p>
                    <p>From SimonConvert</p>
                </NavLink>
            </div>
        );
    }
}

export default MiniJeuCard;

