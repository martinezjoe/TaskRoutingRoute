import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "../Styles/task.scss"
import { LEVELS } from "../Models/levels.enum";
import { Task } from "../Models/task.class";


const TaskComponent = ({ task, complete, remove }) => {
  useEffect(() => {
    console.log("Tarea Creada");
    return () => {
      console.log(`Task: ${task.name} is going to unmount`);
    };
  }, [task]);

  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className="mb-0">
            <span className="badge bg-primary">{task.level}</span>
          </h6>
        );

      case LEVELS.URGENT:
        return (
          <h6 className="mb-0">
            <span className="badge bg-warning">{task.level}</span>
          </h6>
        );

      case LEVELS.BLOCKING:
        return (
          <h6 className="mb-0">
            <span className="badge bg-danger">{task.level}</span>
          </h6>
        );
      default:
        break;
    }
  }

  function taskIconCompleted() {
    if (task.completed) {
      return (
        <i
          onClick={() => complete(task)}
          className="bi-toggle-on task-action"
          style={{ color: "green", fontWeight: "bold" }}
        ></i>
      );
    } else {
      return (
        <i
          onClick={() => complete(task)}
          className="bi-toggle-off task-action"
          style={{ color: "darkred" }}
        ></i>
      );
    }
  }

  const taskCompleted = {
    color: "rgb(39, 125, 125)",
    fontWeight: "bold",
    textDecoration: "line-through",
    cursor: "pointer",
  };

  const taskPending = {
    fontWeight: "bold",
    color: "hotpink",
    cursor: "pointer",
  };

  return (
    <tr
      className="fw-normal"
      style={task.completed ? taskCompleted : taskPending}
    >
      <th>
        <span
          className="ms-2"
          style={{
            padding: "5px",
            borderRadius: "10px",
          }}
        >
          {task.name}
        </span>
      </th>

      <td className="align-middle">
        <span>{task.description} </span>
      </td>

      <td className="align-middle">{taskLevelBadge()}</td>

      <td className="align-middle">
        {taskIconCompleted()}

        <i
          className="bi-trash task-action"
          onClick={() => remove(task)}
          style={{ color: "darkred", fontSize: "18px" }}
        ></i>
      </td>
    </tr>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  complete: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default TaskComponent;
