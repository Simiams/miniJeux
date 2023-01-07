import React from "react";

let countrieData = {
    goodUrl: {
        method: "get",
        url: () => {
            return `https://restcountries.com/v3.1/all`
        }
    },
    randomUrl: {
        method: "get",
        url: () => {
            return `https://restcountries.com/v3.1/all`
        }
    },

    GetData: function GetCountriesData(res) {
        let DataQuizz = {
            id: "1",
            gameName: "FlagGame",
            heading: "",
            goodAnswer: "",
            info: {},
            infoTxt: <p></p>,
            randomAnswers: []
        }

        let rand = Math.floor(Math.random() * (res.length));

        DataQuizz.goodAnswer = res[rand].translations.fra.common;
        DataQuizz.heading = <img src={res[rand].flags.svg} alt="Pokemon image"/>


        DataQuizz.info = {
            officialName: res[rand].translations.fra.official,
            independent: res[rand].independent,
            capital: res[rand].capital,
            subregion: res[rand].subregion,
            languages: Object.values(res[rand].languages),
            area: res[rand].area,
            flag: res[rand].flag,
            googleMaps: res[rand].maps.googleMaps,
            population: res[rand].population,
            continent: res[rand].continents
        }
        DataQuizz.infoTxt =
            <p>{DataQuizz.info.flag} <br/> Le <a target="_blank" rel="noopener noreferrer"
                                                 href={DataQuizz.info.googleMaps}>
                <strong>{DataQuizz.info.officialName}</strong></a> est
                un pays du continent <strong>{DataQuizz.info.continent}</strong>, plus precisement
                en <strong>{DataQuizz.info.subregion}</strong> dont la capitale
                est <strong>{DataQuizz.info.capital}</strong>. On y parle
                le <strong>{DataQuizz.info.languages.toString()}
                </strong>. Ce pays compte prés de <strong>{DataQuizz.info.population}</strong> habitant pour une
                superficie
                de <strong>{DataQuizz.info.area}</strong> m² <br/> {DataQuizz.info.flag}</p>

        return DataQuizz
    },

    GetRandomRes: function GetRandomRes(res) {
        let rand = Math.floor(Math.random() * (res.length));
        return res[rand].translations.fra.common;
    }
}

export default countrieData