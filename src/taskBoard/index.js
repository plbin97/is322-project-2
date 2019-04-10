import React, { Component } from 'react';
import Element from './taskElements';
import {toTodo,toInProgress,toReview,toDone} from './changeColunmInSmallScreen';

class TaskBoard extends Component{
    render() {
        let tasks = this.props.t;
        let todoTask = [];
        let inProgressTask = [];
        let ReviewTask = [];
        let DoneTask = [];
        
        for (let task of tasks) {
            switch (task.column) {
                case "todo":
                    todoTask.push(
                        <Element.TodoElement title={task.title} type={task.type} id={task.id} startOnclick={this.props.action.startOnclick} />
                    );
                    break;
                case "in-progress":
                    inProgressTask.push(
                        <Element.InProgressElement title={task.title} type={task.type} id={task.id} sendBackOnclick={this.props.action.sendBackOnclick}  reviewOnclick={this.props.action.reviewOnclick} />
                    );
                    break;
                case "review":
                    ReviewTask.push(
                        <Element.ReviewElement title={task.title} type={task.type} id={task.id} backToWorkOnclick={this.props.action.backToWorkOnclick}  doneOnclick={this.props.action.doneOnclick} />
                    );
                    break;
                case "done":
                    DoneTask.push(
                        <Element.DoneElement title={task.title} type={task.type} id={task.id} reviewAgainOnclick={this.props.action.reviewAgainOnclick} />
                    );
                    break;
                default:
                    break;
            } 
        }

        let manu = (
            <div className="btn-group btn-block taskBoard-dropManu-frame">
                <button id="taskBoard-dropManu-button" type="button" className="btn btn-light btn-lg btn-block dropdown-toggle" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                    To do
                </button>
                <div className="dropdown-menu taskBoard-dropManu">
                    <button className="dropdown-item btn-lg" type="button" onClick={toTodo}>To do</button>
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item btn-lg" type="button" onClick={toInProgress}>In Progress</button>
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item btn-lg" type="button" onClick={toReview}>Review</button>
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item btn-lg" type="button" onClick={toDone}>Done</button>
                </div>
            </div>
        );
        let taskBoard = (
            <div id="gridView" className="taskBoard">
                <div id="taskBoard-todoColumn" className="taskBoard-Column taskBoard-darker" style={{display: "block"}}>
                    <div className="taskBoard-TodoTitle">
                        To do
                    </div>
                    <div>{todoTask}</div>
                </div>
                <div id="taskBoard-inProgressColumn" className="taskBoard-Column">
                    <div className="taskBoard-TodoTitle">
                        In Progress
                    </div>
                    <div>{inProgressTask}</div>
                </div>
                <div id="taskBoard-reviewColumn" className="taskBoard-Column taskBoard-darker">
                    <div className="taskBoard-TodoTitle">
                        Review
                    </div>
                    <div>{ReviewTask}</div>
                </div>
                <div id="taskBoard-doneColumn" className="taskBoard-Column">
                    <div className="taskBoard-TodoTitle">
                        Done
                    </div>
                    <div>{DoneTask}</div>
                </div>
            </div>
        );

        return [manu,taskBoard]
    }
}

export default TaskBoard;
