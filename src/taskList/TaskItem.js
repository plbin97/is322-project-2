import React from 'react';

const TaskItem = props => {
  return (
    <li className="list-group-item">
      { props.task.title}
      <span id="type"> Type: { props.task.type } </span>
      <span id="column"> Status: { props.task.column } </span>
      <button type="button"
              onClick={() => props.markDone(props.task)}
              className="btn btn-primary" style={{ float: 'right' }}>
        Done
        </button>
    </li>
  )
};

export default TaskItem;