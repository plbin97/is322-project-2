import React, { Component } from 'react';
import TaskBoard from './taskBoard/index';
import axios from 'axios';

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

  newTask(taskName,type) {
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
    return (
        <TaskBoard t={this.state.tasks} action={this.taskMovingAction}/>
    );
  }
}

export default App;
