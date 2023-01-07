import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Quizz from "./pages/Quizz";
// import Project from "./pages/Project";
// import NotFound from "./pages/NotFound";

const App = () => {
    return (
        <BrowserRouter>
          <Switch>
            <Route path={"/"} exact component={Home}/>
            <Route path={"/MiniJeu/:game"} component={Quizz}/>
            {/*<Route path={"/Projects/:projectName"} component={Project}/>*/}
            {/*<Route component={NotFound}/>*/}
          </Switch>
        </BrowserRouter>
    );
};

export default App;
