import React, { Component } from 'react';

class Add extends Component{

    state = { newTask: '', type: '' }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.newTask, this.state.type);
        this.setState({ newTask: '', type: '' })
    }

    render(){

        return (

            <form className="task-input form-group" onSubmit={this.onFormSubmit}>
                <label htmlFor="newTask">Enter New Task</label>
                <br />
                Task Name: <br /><input type="text" className="form-control" name="newTask" value={this.state.newTask}
                                  onChange={(e) => this.setState({ newTask: e.target.value })} ></input> <br />
                Type: <select id="type" value={this.state.type} onChange={(e) => this.setState({ type: e.target.value })}>
                <option value="task">Task</option>
                <option value="bug">Bug</option>
                <option value="feature">Feature</option>
                </select> <br />
                <button id="add" type="submit">Add</button>
            </form>
        );
    };
}
export default Add;