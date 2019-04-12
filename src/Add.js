import React, { Component } from 'react';
import {toGridView} from "./navbarNavigation";

class Add extends Component{

    state = { newTask: '', type: '' }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.newTask, this.state.type);
        this.setState({ newTask: '', type: '' })
    }

    render(){

        return (
            <body>
            <form onSubmit={this.onFormSubmit}>
                <label htmlFor="newTask" className="title">Enter New Task</label>
                <br />
                Task Name: <br /> <input type="text" name="newTask" value={this.state.newTask}
                                  onChange={(e) => this.setState({ newTask: e.target.value })} ></input> <br />
                Type: <br /> <select id="type" value={this.state.type} onChange={(e) => this.setState({ type: e.target.value })}>
                <option value="default">Select a Type...</option>
                <option value="task">Task</option>
                <option value="bug">Bug</option>
                <option value="feature">Feature</option>
                </select> <br /> <br />
                <button type="submit" className="taskBoard-element-button btn btn-outline-primary btn-sm" onClick={toGridView}>Add</button>
            </form>
            </body>
        );
    };
}
export default Add;