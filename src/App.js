import React from 'react';
import { Switch,Route,Link } from "react-router-dom";
import QuizList from "./containers/QuizList/QuizList";
import Auth from "./containers/Auth/Auth";
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import Quiz from "./containers/Quiz/Quiz";
import Layout from "./hoc/Layout/Layout";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path={'/auth'} component={Auth}/>
                <Route path={'/quiz-creator'} component={QuizCreator}/>
                <Route path={'/quiz/:id'} component={Quiz}/>
                <Route path={'/quiz'} component={QuizList}/>
            </Switch>
        </Layout>
    );
}

export default App;
