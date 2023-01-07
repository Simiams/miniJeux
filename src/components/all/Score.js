import React, {Component} from 'react';
import {minijeuData} from "../../data/minijeu.data";
import {player} from "../../entities/Player";


class Score extends Component {
    render() {
        let scores = []

        for (let i = 0; i < Object.values(minijeuData).length; i++) {
            let currentScore
            currentScore = Object.values(player[0].scores)[i].goodAnswer
            scores.push({
                score: currentScore,
                icon: Object.values(minijeuData)[i].ico
            })
        }



        return (
            <div className={"scores"}>
                {
                    scores.map((s) => {
                        return (
                            <div className={"score"}>
                                <img key={s.icon} src={s.icon} alt="logo de jeu"/>
                                <p>{s.score}</p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Score;