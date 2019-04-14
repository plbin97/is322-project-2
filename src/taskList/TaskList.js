import React from 'react';

import TaskItem from './TaskItem';

class TaskList extends React.Component {

  state = {
    sort:'',
    filter:[]
  };

  markDone = (task) => {
    const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
    let taskList = this.props.tasks;
    taskList.splice(taskIndex, 1);
    console.log(this.props);
    // this.props.onUpdateTaskList(taskList);
  }
  sortList() {
    let taskList = this.props.tasks;

    switch(this.state.sort){
      case 'title':
        taskList.sort((a, b) => (a.title > b.title) ? 1 : -1);
        break;
      case 'type':
        taskList.sort((a,b) => (a.type > b.type) ? 1 : -1);
        break;
      case 'column':
        taskList.sort((a,b) => (a.column > b.column) ? 1 : -1);
        break;
    }
  }

  render() {
    const taskItems = this.props.tasks.map(task => {
      return <TaskItem task={task} key={task.id} markDone={this.markDone} />
    });

    let sort = (<div id="container">
      <div id="left">
        <h3>Sort</h3>
        <select>
          <option value="Default">Pick an Option</option>
          <option value="Title">Title</option>
          <option value="Status">Status</option>
          <option value="Type">Type</option>
        </select>
      </div>
      <div id="center">
        <h3>Status</h3>
        <select>
          <option value="Default">Pick an Option</option>
          <option value="To do">To do</option>
          <option value="In Progress">In Progress</option>
          <option value="Review">Review</option>
          <option value="Done">Done</option>
        </select>
      </div>
      <div id="right">
        <h3>Type</h3>
        <select>
          <option value="Default">Pick an Option</option>
          <option value="Task">Task</option>
          <option value="Feature">Feature</option>
          <option value="Review">Review</option>
          <option value="Bug">Bug</option>
        </select>
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