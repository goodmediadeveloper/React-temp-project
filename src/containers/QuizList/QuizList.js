import React, {Component} from "react"
import classes from './QuizList.module.sass'
import {NavLink} from "react-router-dom"

export default class QuizList extends Component {


    render() {
        return (
            <div className={classes.QuizList}>
                <div>
                    <h1>Test list</h1>
                    <ul>
                        <li><NavLink to={'/quiz/1'}>Test 1</NavLink></li>
                        <li><NavLink to={'/quiz/2'}>Test 2</NavLink></li>
                        <li><NavLink to={'/quiz/3'}>Test 3</NavLink></li>
                    </ul>
                </div>
            </div>
        )
    }
}
