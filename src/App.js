import React, { Component } from 'react';
import TaskBoard from './taskBoard/index';

class App extends Component {

  state = {
    tasks: [],
    newTaskID: 0
  };

  componentDidMount() {
    this.getData();
  }

  getData() {
    this.setState({
      tasks: [
        {
          "id": 1,
          "title": "Install React",
          "type": "task",
          "column": "done"
        },
        {
          "id": 2,
          "title": "Setup GitHub",
          "type": "task",
          "column": "review"
        },
        {
          "id": 3,
          "title": "Invite Collaborators",
          "type": "task",
          "column": "done"
        },
        {
          "id": 4,
          "title": "Install Dependencies",
          "type": "task",
          "column": "in-progress"
        },
        {
          "id": 5,
          "title": "Create App Component",
          "type": "feature",
          "column": "review"
        },
        {
          "id": 6,
          "title": "Plan Component Diagram",
          "type": "task",
          "column": "review"
        },
        {
          "id": 7,
          "title": "Create Grid View",
          "type": "feature",
          "column": "in-progress"
        },
        {
          "id": 8,
          "title": "Create List View",
          "type": "feature",
          "column": "todo"
        },
        {
          "id": 9,
          "title": "Create Add Form",
          "type": "feature",
          "column": "todo"
        },
        {
          "id": 10,
          "title": "App Crashs! :(",
          "type": "bug",
          "column": "done"
        }
      ],
      newTaskID: 11
    })
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
