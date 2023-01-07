import React, {Component} from 'react';
import {player} from "../../entities/Player";

class QuizzCard extends Component {

    shuffle = (array) => {
        let size = array.length;
        let newArray = [];
        for (let i = 0; i < size; i++) {
            let rand = Math.floor(Math.random() * (array.length));
            newArray.push(array[rand]);
            array.splice(rand, 1)
        }
        return newArray;
    };

    checkResponse = (event) => {
        let info = document.getElementById("quizzInfo");
        info.style.display = "block";

        let eles = document.getElementsByClassName("choice");

        for (let i = 0; i < eles.length; i++) {
            if (eles[i].innerHTML !== this.props.data.goodAnswer) {
                eles[i].style.backgroundColor = "rgba(109,9,9,0.54)";
            } else {
                eles[i].style.backgroundColor = "rgba(22,109,9,0.54)";
            }
        }

        if (event.target.innerText === this.props.data.goodAnswer) {
            info.style.backgroundColor = "rgba(22,109,9,0.54)";
            player[0].scores[this.props.data.gameName].goodAnswer += 1;
        } else {
            info.style.backgroundColor = "rgba(109,9,9,0.54)";
            player[0].scores[this.props.data.gameName].wrongAnswer += 1;
        }
        player[0].scores[this.props.data.gameName].totalAnswer += 1;
    }


    render() {
        let tabIndex = [0,1,2,3];
        return (
            <div className={"quizzCard"}>
                <h2>{this.props.data.name}</h2>
                {this.props.data.heading}
                <div className={"answersChoices"}>

                    {
                        this.shuffle(tabIndex).map((i) => {
                            return (
                                <h2 className={"choice"} onClick={this.checkResponse}>{this.props.data.totalAnswers[i]}</h2>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default QuizzCard;