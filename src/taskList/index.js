import React, { Component } from 'react';

class TaskList extends Component{
    render() {
        let tasks = this.props.t;
        console.log(tasks);
        let arr = [];
        for (let i = 0;i < tasks.length;i++){
            let temp = (
                <tr>{tasks[i].title}</tr>
            );
            arr.push(temp);
        }
        let table = (
            <table className="taskList-table">{arr}</table>
        );
        let sort = (<div id="container">
            <div id="left">
                <h3>Sort</h3>
                <select>
                    <option value="Title">Title</option>
                    <option value="Status">Status</option>
                    <option value="Type">Type</option>
                </select>
            </div>
            <div id="center">
                <h3>Status</h3>
                <select>
                    <option value="To do">To do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Review">Review</option>
                    <option value="Done">Done</option>
                </select>
            </div>
            <div id="right">
                <h3>Type</h3>
                <select>
                    <option value="Task">To do</option>
                    <option value="Feature">In Progress</option>
                    <option value="Review">Review</option>
                    <option value="Done">Done</option>
                </select>
            </div>
        </div>);
        return (table, sort);
    }
}

export default TaskList;