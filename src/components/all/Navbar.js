import {NavLink} from "react-router-dom";
import React, {Component} from 'react';
import Score from "./Score";
import {minijeuData} from "../../data/minijeu.data";

class Navbar extends Component {

    resetResponse = () => {
        let info = document.getElementById("quizzInfo");
        let btnNext = document.getElementById("btnbug");
        let eles = document.getElementsByClassName("choice");
        let quizzCard = document.getElementsByClassName("quizzCard");
        if (info !== null && eles !== null && quizzCard !== null) {
            info.style.display = "none";
            btnNext.innerText = "Start";
            for (let i = 0; i < eles.length; i++) {
                eles[i].style.backgroundColor = "#060d2e";
            }
            for (let i = 0; i < quizzCard.length; i++) {
                quizzCard[i].style.display = "none";
            }
        }
    }

    render() {
        return (
            <div className={"minijeu_navbar"}>
                <ul>
                    <li>
                        <NavLink key={0} className={"subtitle"} exact to={"/"}>
                            Home
                        </NavLink>
                    </li>

                    {
                        Object.keys(minijeuData).map((minijeu) => {
                            return (
                                <li>
                                    <NavLink onClick={this.resetResponse} className={"subtitle"} exact
                                             to={`/MiniJeu/${minijeu}`}>
                                        {minijeu}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                    <li>
                        <Score />
                    </li>
                    <li>
                        <NavLink key={3} className={"subtitle"} exact to={"/Login/BotanicGame"}>
                            Login
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navbar;