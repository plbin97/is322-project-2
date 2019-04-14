import React from 'react';

import TaskItem from './TaskItem';

class TaskList extends React.Component {

  state = {
    tasks: [],
    sort: '',
    filterA: '',
    filterB: ''
  };

  markDone = (task) => {
    const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
    let taskList = this.props.tasks;
    taskList.splice(taskIndex, 1);
    console.log(this.props);
    // this.props.onUpdateTaskList(taskList);
  };

  updateResults(){

    let taskList = this.props.tasks;
    let filteredList = [];

    switch(this.state.sort){
      case 'Title':
        taskList.sort((a, b) => (a.title > b.title) ? 1 : -1);
        break;
      case 'Type':
        taskList.sort((a,b) => (a.type > b.type) ? 1 : -1);
        break;
      case 'Column':
        taskList.sort((a,b) => (a.column > b.column) ? 1 : -1);
        break;
      default:
        break;
    }
    if(this.state.filterA != 'Default'){
      for(let i = 0; i < taskList.length; i++){

        if(taskList[i].type === this.state.filterA){
          filteredList.push(taskList[i]);
        }
      }
    }
    if(this.state.filterB != 'Default'){
      for(let j = 0; j < taskList.length; j++){
        if(taskList[j].column === this.state.filterB){
          filteredList.push(taskList[j]);
        }
      }
    }
    if(this.state.filterA != 'Default' & this.state.filterB != 'Default'){
      for(let k = 0; k < filteredList.length; k++){
        if(filteredList[k].type != this.state.filterA || filteredList[k].column != this.state.filterB){
          filteredList.splice(k, 1);
        }
      }
    }
    else{
      filteredList = this.props.tasks;
    }

    this.props.tasks = filteredList;
  }

  render() {

    this.state.tasks = this.props.tasks;

    const taskItems = this.props.tasks.map(task => {
      return <TaskItem task={task} key={task.id} markDone={this.markDone} />
    });

    let sort = (<div id="container">
      <span id="left">
        <h3>Sort</h3>
        <select value={this.setState.sort} onChange={(e) => this.setState({ sort: e.target.value })}>
          <option value="Title">Title</option>
          <option value="Status">Status</option>
          <option value="Type">Type</option>
        </select>
      </span>
      <span id="center">
        <h3>Status</h3>
        <select value={this.setState.filterA} onChange={(e) => this.setState({ filterA: e.target.value })}>
          <option value="To do">To do</option>
          <option value="In Progress">In Progress</option>
          <option value="Review">Review</option>
          <option value="Done">Done</option>
        </select>
      </span>
      <span id="right">
        <h3>Type</h3>
        <select value={this.setState.filterB} onChange={(e) => this.setState({ filterB: e.target.value })}>
          <option value="Task">Task</option>
          <option value="Feature">Feature</option>
          <option value="Review">Review</option>
          <option value="Done">Done</option>
        </select>
      </span>
      <div>
        <button onClick={this.updateResults}>Refine</button>
      </div>
    </div>);

    return (

        <div id="sort"> { sort }
          <ul className="task-list list-group">
            { taskItems }
          </ul>
        </div>
    )
  }
}
export default TaskList;