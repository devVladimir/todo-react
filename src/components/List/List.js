import React, {Component} from 'react';

import './List.style.css';

import Task from '../Task/Task';

export default class List extends Component {

    state = {
        tasks: []
    }

    render() {
        return (
            <ul className="list">
                <Task taskName="Взять вилку"/>
                <Task taskName="Начать работать"/>
            </ul>
        )
    }
}