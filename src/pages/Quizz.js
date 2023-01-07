import React, {Component} from 'react';
import Navbar from "../components/all/Navbar";
import Footer from "../components/all/Footer";
import QuizzCard from "../components/quizz/QuizzCard";
import countrieData from "../logic/GetCountriesData";
import QuizzInfo from "../components/quizz/QuizzInfo";
import pokemonData from "../logic/GetPokemonData";
import axios from "axios";
import scienceData from "../logic/GetScienceData";
import historyData from "../logic/GetHistoryData";

class Quizz extends Component {
    getParser() {
        if (this.props.match.params.game === "FlagGame") {
            return countrieData;
        } else if (this.props.match.params.game === "PokeGame") {
            return pokemonData;
        } else if (this.props.match.params.game === "ScienceGame") {
            return scienceData;
        } else if (this.props.match.params.game === "HistoryGame") {
            return historyData;
        }
    }

    next = () => {
        let info = document.getElementById("quizzInfo");
        info.style.display = "none";
        let choices = document.getElementsByClassName("choice");
        this.setState({
            totalAnswers: [],
            randomAnswers: []
        })
        for (let i = 0; i < choices.length; i++) {
            choices[i].style.backgroundColor = "#060d2e";
        }
        this.getData("get", "https://pokeapi.co/api/v2/pokemon/10")

        let btnNext = document.getElementById("btnbug");
        let quizzCard = document.getElementsByClassName("quizzCard");
        btnNext.innerText = "Suivant";
        for (let i = 0; i < quizzCard.length; i++) {
            quizzCard[i].style.display = "block";
        }
    }

    getData() {
        const parser = this.getParser()
        try {
            axios({
                method: parser.goodUrl.method,
                url: parser.goodUrl.url()
            }).then((res) => {
                let data = parser.GetData(res.data)
                this.setState({
                    id: data.id,
                    gameName: data.gameName,
                    heading: data.heading,
                    goodAnswer: data.goodAnswer,
                    info: data.info,
                    infoTxt: data.infoTxt,
                })
                this.setState(prevState => ({
                    totalAnswers: [...prevState.totalAnswers, data.goodAnswer]
                }))
                if (data.randomAnswers.length === 0){
                    this.getRandomResponse()
                } else {
                    console.log(data.randomAnswers)
                    this.setState({
                        randomAnswers: data.randomAnswers
                    })
                    this.setState(prevState => ({
                        totalAnswers: [...prevState.totalAnswers, ...data.randomAnswers]
                    }))
                }
            }).catch((err) => {
                console.log(err)
            })
        } catch (err) {
            console.log(err);
        }
    }

    getRandomResponse() {
        const parser = this.getParser()
        for (let i = 0; i < 3; i++) {
            try {
                axios({
                    method: parser.randomUrl.method,
                    url: parser.randomUrl.url()
                }).then((res) => {
                    let data = parser.GetRandomRes(res.data, i)
                    this.setState(prevState => ({
                        randomAnswers: [...prevState.randomAnswers, data],
                        totalAnswers: [...prevState.totalAnswers, data]
                    }))
                }).catch((err) => {
                    console.log(err)
                })
            } catch (err) {
                console.log(err);
            }
        }
    }

    state = {
        id: "1",
        gameName: "PokeGame",
        heading: "",
        goodAnswer: "",
        randomAnswers: [],
        totalAnswers: [],
        info: {},
        infoTxt: <p></p>
    }

    render() {
        return (
            <div className={"miniJeuQuizz"}>
                <Navbar/>
                <h1 className={"title"}>
                    {this.props.match.params.game}
                </h1>

                <QuizzInfo data={this.state}/>
                <QuizzCard id={"quizzCard"} data={this.state}/>

                <button id={"btnbug"} onClick={this.next}>Start</button>
                <Footer/>
            </div>
        )
    }
}


export default Quizz;