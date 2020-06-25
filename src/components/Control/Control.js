import React, {Component} from 'react';

import './Control.style.css';

export default class Control extends Component {

    state = {
        task: ""
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTask(this.state.task);
    }

    handleChange = (event) => {
        this.setState({task: event.target.value});
    }

    render() {
        return (
            <form className="control" onSubmit={this.handleSubmit}>
                <input
                    className="control-input form-control"
                    placeholder="Type your task here"
                    value={this.state.value}
                    onChange={this.handleChange}
                    />
                <button className="btn btn-primary" type="submit">Add task</button>
            </form>
        );
    }
}