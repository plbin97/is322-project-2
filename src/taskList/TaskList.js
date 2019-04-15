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

  updateResults = () => {

    let taskList = this.props.tasks;

    switch(this.state.sort){
      case 'Title':
        taskList.sort((a, b) => (a.title > b.title) ? 1 : -1);
        break;
      case 'Type':
        taskList.sort((a,b) => (a.type > b.type) ? 1 : -1);
        break;
      case 'Status':
        taskList.sort((a,b) => (a.column > b.column) ? 1 : -1);
        break;
      default:
        break;
    }

    //For *whatever reason*, this deletes half the list at once.
    //This section is now dubbed Thanos.
    //for(let i = 0; i < taskList.length; i++){
     // if(taskList[i].type !== this.state.filterA & taskList[i].column !== this.state.filterB){
        //taskList.splice(i, 1);
     // }
    //}

    this.setState((tasks) =>{
      return {tasks: taskList}
    });
  };

  render() {

    const taskItems = this.props.tasks.map(task => {
      return <TaskItem task={task} key={task.id} markDone={this.markDone} />
    });

    let sort = (<div id="container">
      <span id="left">
        <h3>Sort</h3>
        <select value={this.setState.sort} onChange={(e) => this.setState({ sort: e.target.value })}>
          <option value="Default">Pick An Option</option>
          <option value="Title">Title</option>
          <option value="Status">Status</option>
          <option value="Type">Type</option>
        </select>
      </span>
      <span id="center">
        <h3>Status</h3>
        <select value={this.setState.filterA} onChange={(e) => this.setState({ filterA: e.target.value })}>
          <option value="Default">Pick An Option</option>
          <option value="To do">To do</option>
          <option value="In Progress">In Progress</option>
          <option value="Review">Review</option>
          <option value="Done">Done</option>
        </select>
      </span>
      <span id="right">
        <h3>Type</h3>
        <select value={this.setState.filterB} onChange={(e) => this.setState({ filterB: e.target.value })}>
          <option value="Default">Pick An Option</option>
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