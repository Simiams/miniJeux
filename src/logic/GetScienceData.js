let scienceData = {
    constant: {},

    goodUrl: {
        method: "get",
        url: () => {
            let rand = Math.floor(Math.random() * (5));
            if (rand === 0){
                scienceData.constant = "easy"
            } else if (rand === 1 || rand === 2) {
                scienceData.constant = "medium"
            } else {
                scienceData.constant = "hard"
            }
            return `https://the-trivia-api.com/api/questions?categories=science&limit=1&difficulty=${scienceData.constant}`}
    },
    randomUrl: {
        method: "get",
        url: () => {return `https://the-trivia-api.com/api/questions?categories=science&limit=1&difficulty=${scienceData.constant}`}
    },

    GetData: function GetData(res) {
        let DataQuizz = {
            id: "1",
            gameName: "ScienceGame",
            heading: "",
            goodAnswer: "",
            info: {},
            infoTxt: <p></p>,
            randomAnswers: []
        }

        DataQuizz.goodAnswer = res[0].correctAnswer;
        DataQuizz.randomAnswers = res[0].incorrectAnswers;
        DataQuizz.heading = <h2 style={{
            borderRadius: "25px",
            border: "4px solid #0e1538",
            boxShadow: "-5px -2px 50px #060d2e",
            backgroundImage: `linear-gradient(to bottom, #060d2e, #0e1538)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            padding: "6rem 2rem",
            fontSize: "1.35rem",
        }}>{res[0].question}</h2>

        DataQuizz.info = {
            text: res[0].correctAnswer
        }
        DataQuizz.infoTxt =
            <p>It was <strong>{DataQuizz.info.text}</strong></p>
        return DataQuizz
    },

    GetRandomRes: function GetRandomRes(res, incr) {
        return res[0].incorrectAnswers[incr];
    }
}

export default scienceData