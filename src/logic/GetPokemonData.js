import React from "react";

let pokemonData = {
    goodUrl: {
        method: "get",
        url: () => {return `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * (905 - 1 + 1)) + 1}`}
    },
    randomUrl: {
        method: "get",
        url: () => {return `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * (905 - 1 + 1)) + 1}`}
    },

    GetData: function GetPokemonData(res) {
        let DataQuizz = {
            id: "1",
            gameName: "PokeGame",
            heading: "",
            goodAnswer: "",
            info: {},
            infoTxt: <p></p>,
            randomAnswers: []
        }


        DataQuizz.goodAnswer = res.name;
        DataQuizz.heading = <img src={res.sprites.front_default} alt="Pokemon image"/>


        DataQuizz.info = {
            name: res.name,
            abilities: res.abilities,
            height: res.height,
            hp: res.stats[0].base_stat,
            attack: res.stats[1].base_stat,
            defense: res.stats[2].base_stat,
            special_attack: res.stats[3].base_stat,
            special_defense: res.stats[4].base_stat,
            speed: res.stats[5].base_stat,
            types: res.types
        }
        DataQuizz.infoTxt =
            <p><strong>{DataQuizz.info.name}</strong> est
                un res du type
                {
                    DataQuizz.info.types.map((t) => {
                        return (
                            <strong> {t.type.name}</strong>
                        )
                    })
                }. Il mesure prés de <strong>{DataQuizz.info.height}0</strong>cm. Ces attack principales sont:
                {
                    DataQuizz.info.abilities.map((a) => {
                        return (
                            <strong> {a.ability.name}</strong>
                        )
                    })
                }
                . Il possedent, de base, une attaque de <strong>{DataQuizz.info.attack}</strong>, une defence
                de <strong>{DataQuizz.info.defense}</strong>, une attaque special
                de <strong>{DataQuizz.info.special_attack}</strong>, une defence speciale
                de <strong>{DataQuizz.info.special_defense}</strong> et une vitesse
                de <strong>{DataQuizz.info.speed}</strong>
            </p>
        return DataQuizz
    },

    GetRandomRes: function GetRandomRes(res) {
        return res.name;
    }
}

export default pokemonData