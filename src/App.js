import React, { Component } from 'react';
import TaskBoard from './taskBoard/index';
import axios from 'axios';
import Add from './Add';
import { toGridView, toTaskList, toAddTask } from './navbarNavigation';
import TaskList from "./taskList/TaskList";

class App extends Component {

  state = {
    tasks: [],
    newTaskID: 0
  };

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('http://my-json-server.typicode.com/KingLogar/FakeDB1/posts')
        .then(response => {
          this.setState({ tasks: response.data });
        }).catch(error => {
      this.setState({ errorMessage: error.message });
    });
  }

  taskMovingAction = {
    startOnclick: (id) => {
      let tasks = this.state.tasks;
      for (let task of tasks) {
        if (task.id === id) {
          task.column = "in-progress";
        }
      }
      this.setState({tasks});
    },
    sendBackOnclick: (id) => {
      let tasks = this.state.tasks;
      for (let task of tasks) {
        if (task.id === id) {
          task.column = "todo";
        }
      }
      this.setState({tasks});
    },
    reviewOnclick: (id) => {
      let tasks = this.state.tasks;
      for (let task of tasks) {
        if (task.id === id) {
          task.column = "review";
        }
      }
      this.setState({tasks});
    },
    backToWorkOnclick: (id) => {
      let tasks = this.state.tasks;
      for (let task of tasks) {
        if (task.id === id) {
          task.column = "in-progress";
        }
      }
      this.setState({tasks});
    },
    doneOnclick: (id) => {
      let tasks = this.state.tasks;
      for (let task of tasks) {
        if (task.id === id) {
          task.column = "done";
        }
      }
      this.setState({tasks});
    },
    reviewAgainOnclick: (id) => {
      let tasks = this.state.tasks;
      for (let task of tasks) {
        if (task.id === id) {
          task.column = "review";
        }
      }
      this.setState({tasks});
    }
  };

  newTask = (taskName,type) => {
    console.log(this.state.tasks);
    this.state.tasks.push({
      id: this.state.newTaskID,
      title: taskName,
      type: type,
      column: "todo"
    });
    this.setState({
      newTaskID: this.state.newTaskID + 1
    });
  }

  render() {
    let navbar = (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">My Todo List</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <button type="button" className="nav-link btn btn-light ml-3" onClick={toGridView} >Grid View <span className="sr-only">(current)</span></button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-light ml-1" onClick={toTaskList}>Task List</button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-light ml-1" onClick={toAddTask}>Add Task</button>
              </li>
            </ul>
          </div>
        </nav>
    );

    let taskList = (
        <div id="taskList" style={{display:"none"}}>
            <TaskList tasks={this.state.tasks} />
        </div>
    );

    let addTask = (
        <div id="addTask" style={{display:"none"}}>
          <Add onSubmit={this.newTask} />
        </div>
    );

    return [
        navbar,
        <TaskBoard t={this.state.tasks} action={this.taskMovingAction}/>,
        taskList,
        addTask
    ];
  }
}

export default App;
